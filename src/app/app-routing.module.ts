import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{ path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
{ path: 'converter', loadChildren: () => import('./modules/currency-exchanger/currency-exchanger.module').then(m => m.CurrencyExchangerModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
