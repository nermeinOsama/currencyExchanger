import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ICurrencyExchanger,  } from 'src/app/core/interfaces/CurrencyExchanger/icurrency-exchanger';
import { CurrencyExchangerService } from 'src/app/core/services/currency-exchanger/currency-exchanger.service';


@Component({
  selector: 'app-chart-historical-rates',
  templateUrl: './chart-historical-rates.component.html',
  styleUrls: ['./chart-historical-rates.component.scss'],
})
export class ChartHistoricalRatesComponent implements OnInit {

  @Input() modelCurrencyForm: ICurrencyExchanger = {};
  eChartsOption: EChartsOption | undefined;
  monthList: any = []
  rateList: any = []

  constructor(public currencyExchangerService:CurrencyExchangerService) {}
  ngOnInit(): void {
    
    if (this.modelCurrencyForm) {
      this.getChartofCurrency()
    }

  }

  drawChart(){
  this.eChartsOption = {
    xAxis: {
      type: 'category',
      data: this.monthList,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.rateList,
        type: 'line',
        smooth: true
      },
    ],
  };

}

  getChartofCurrency = () => {
    this.currencyExchangerService.getTimeseries().subscribe((result:any) => {
      if (result) {
        for (let key in  result?.rates) {
          this.monthList.push(key)
          this.rateList.push(result.rates[key].GBP)
       }
        this.drawChart()
      }
      else {

      }
    }, error => {
      //logging
    })
  
  }
}

