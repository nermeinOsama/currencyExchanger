import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrencyExchanger } from '../../interfaces/CurrencyExchanger/icurrency-exchanger';


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangerService {
  requestOptions={}
  APIKey= 'nLwKHaqzm3Xsc3JncuAku7kLlSiUTafF'
  constructor(private  _http: HttpClient) { }

  getCurrencyExchanger = (Model:ICurrencyExchanger) =>{
    var myHeaders = new Headers();
    myHeaders.append("apikey", this.APIKey);

    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers:  myHeaders
    };

    fetch("https://api.apilayer.com/fixer/convert?to="+ Model.to +"&from="+ Model.from+"&amount="+ Model.amount, this.requestOptions)
  }

 

  getTimeseries = () => {
    return this._http
      .get('https://api.apilayer.com/fixer/timeseries?start_date=2022-05-01&end_date=2023-04-20',{
        headers: {'apikey':this.APIKey}
     })
    }

    getAllCurrencies= () => {
      return this._http
      .get('https://api.apilayer.com/fixer/symbols',{
        headers: {'apikey':this.APIKey}
     })
  
    }

    saveForm = (model:ICurrencyExchanger) => {
      return this._http
      .get( 'https://api.apilayer.com/fixer/convert?to=' +
            model.to +
              '&from=' +
              model.from +
              '&amount=' +
              model.amount,{
        headers: {'apikey':this.APIKey}
     })
     
     
    }

}
