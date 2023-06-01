import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseConstantModel } from './core/ng-model/BaseConstantModel/base-constant-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-exchanger';
  constructor(private router: Router){}

  showHeader(){
    return !BaseConstantModel.NO_HEADER_ROUTES.includes(this.router.url.split('?')[0]) && this.router.url !== '/';
  }

}
