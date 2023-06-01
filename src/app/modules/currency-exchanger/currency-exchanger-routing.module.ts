import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperCurrencyExchangerComponent } from './components/wrapper-currency-exchanger/wrapper-currency-exchanger.component';
const routes: Routes = 
[
  {path: '', component: WrapperCurrencyExchangerComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyExchangerRoutingModule { }
