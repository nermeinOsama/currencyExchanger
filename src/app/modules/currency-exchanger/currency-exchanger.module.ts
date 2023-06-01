import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import { WrapperCurrencyExchangerComponent } from './components/wrapper-currency-exchanger/wrapper-currency-exchanger.component';
import { ViewCurrencyExchangerComponent } from './components/wrapper-currency-exchanger/view-currency-exchanger/view-currency-exchanger.component';
import { HistoricalRatesComponent } from './components/wrapper-currency-exchanger/historical-rates/historical-rates.component';
import { ChartHistoricalRatesComponent } from './components/wrapper-currency-exchanger/chart-historical-rates/chart-historical-rates.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    WrapperCurrencyExchangerComponent,
    ViewCurrencyExchangerComponent,
    HistoricalRatesComponent,
    ChartHistoricalRatesComponent,
  ],
  imports: [
    CommonModule,NgSelectModule,
    CurrencyExchangerRoutingModule,FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports:[NgSelectModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CurrencyExchangerModule { }
