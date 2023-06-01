import { Component, Input, OnInit } from '@angular/core';
import { ICurrencyExchanger } from 'src/app/core/interfaces/CurrencyExchanger/icurrency-exchanger';

@Component({
  selector: 'app-historical-rates',
  templateUrl: './historical-rates.component.html',
  styleUrls: ['./historical-rates.component.scss']
})
export class HistoricalRatesComponent implements OnInit {
  @Input() listHistory:ICurrencyExchanger[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
