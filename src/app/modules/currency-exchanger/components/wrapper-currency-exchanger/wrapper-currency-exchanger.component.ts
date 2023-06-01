import { Component, OnInit, ViewChild } from '@angular/core';
import { ICurrencyExchanger } from 'src/app/core/interfaces/CurrencyExchanger/icurrency-exchanger';

@Component({
  selector: 'app-wrapper-currency-exchanger',
  templateUrl: './wrapper-currency-exchanger.component.html',
  styleUrls: ['./wrapper-currency-exchanger.component.scss']
})
export class WrapperCurrencyExchangerComponent implements OnInit {
  
  listHistory:ICurrencyExchanger[] |undefined
  modelCurrencyForm: ICurrencyExchanger |undefined
  showChart:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  recivetHistoryRate(event:ICurrencyExchanger[]){
    this.listHistory = event
  }
  
  FormCurrencyMethod(event:ICurrencyExchanger){
    this.showChart = true
    this.modelCurrencyForm = event
  }

  closeChartPage(event:boolean){
   this.showChart = event
  }
}
