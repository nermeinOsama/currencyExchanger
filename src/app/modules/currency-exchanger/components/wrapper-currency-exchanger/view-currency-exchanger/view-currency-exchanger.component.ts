import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { formatDate } from '@angular/common';
import { ICurrencyExchanger } from 'src/app/core/interfaces/CurrencyExchanger/icurrency-exchanger';
import { IHistoricalRates } from 'src/app/core/interfaces/CurrencyExchanger/ihistorical-rates';
import { BaseMessageModel } from 'src/app/core/ng-model/base-message-model';
import { CurrencyExchangerService } from 'src/app/core/services/currency-exchanger/currency-exchanger.service';
class SearchItem {
  constructor(
    key: string,
    name: string,

  ) { }
}
@Injectable()
@Component({
  selector: 'app-view-currency-exchanger',
  templateUrl: './view-currency-exchanger.component.html',
  styleUrls: ['./view-currency-exchanger.component.scss'],
})
export class ViewCurrencyExchangerComponent implements OnInit {
  @Output() listHistoryrate = new EventEmitter<ICurrencyExchanger[]>();
  @Output() modelCurrencyForm = new EventEmitter<ICurrencyExchanger>();
  @Output() backBtn = new EventEmitter<boolean>();

  detailsFalg: boolean = true;
  currencyExchangerModel: ICurrencyExchanger = {};
  responseModel: any;
  listOfAllCurrencies: any;
  currenciesFormName: string = 'Euro';
  currenciesFromId: string = 'EUR';
  currenciesToId: string = 'USD';
  oldcurrenciesToId: string = 'USD';
  oldcurrenciesFromId: string = 'EUR';
  newHistorylist: ICurrencyExchanger[] = [];
  
  constructor(public currencyExchangerService: CurrencyExchangerService) {}

  ngOnInit(): void {
    this.initData();
    this.getLookupsOfAllCurrencies();
  }

  initData() {
    this.currencyExchangerModel = {
      from: this.currenciesFromId,
      to: this.currenciesToId,
      amount: '1',
      date: new Date(),
    };
  }

  getLookupsOfAllCurrencies() {
    this.currencyExchangerService.getAllCurrencies().subscribe(
      (response: any) => {
        if (response) {
          this.listOfAllCurrencies = [];
          let keys = Object.keys(response.symbols);
          keys.map((item, index) => {
            var addObj = { id: item, name: response.symbols[item] };
            this.listOfAllCurrencies.push(addObj);
          });
        } else {
        }
      },
      (error) => {
        //logging
      }
    );
  }

  onChangeCurrenciesFrom(event: any) {
    this.currenciesFromId = event.id;
    this.oldcurrenciesFromId = this.currenciesFromId;
    this.currenciesFormName = event.name;
    this.currencyExchangerModel.from = event.id;
  }

  onChangeCurrenciesTo(event: any) {
    this.currenciesToId = event?.id;
    this.oldcurrenciesToId = this.currenciesFromId;
    this.currencyExchangerModel.to = event?.id;
  }

  submitForm() {
    this.currencyExchangerModel = {
      from: this.currencyExchangerModel.from,
      to: this.currencyExchangerModel.to,
      amount: this.currencyExchangerModel.amount,
      date: this.currencyExchangerModel.date,
    };
    this.currencyExchangerService
      .saveForm(this.currencyExchangerModel)
      .subscribe(
        (response: any) => {
          if (response) {
            this.responseModel = response;
            if (this.responseModel) {
              this.newHistorylist.push(this.currencyExchangerModel);
              this.listHistoryrate.emit(this.newHistorylist);
            }
          } else {
          }
        },
        (error) => {
          //logging
        }
      );
  }

  DetailsPage() {
    this.detailsFalg = false;
    this.modelCurrencyForm.emit(this.currencyExchangerModel);
  }

  backButton() {
    this.detailsFalg = true;
    this.backBtn.emit(false)

  }

  swap() {
    this.currenciesFromId = this.oldcurrenciesToId;
    this.currenciesToId = this.oldcurrenciesFromId;
  }
}


