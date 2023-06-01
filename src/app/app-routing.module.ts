import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [


{ path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
{ path: 'converter', loadChildren: () => import('./modules/currency-exchanger/currency-exchanger.module').then(m => m.CurrencyExchangerModule),canActivate:[AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
