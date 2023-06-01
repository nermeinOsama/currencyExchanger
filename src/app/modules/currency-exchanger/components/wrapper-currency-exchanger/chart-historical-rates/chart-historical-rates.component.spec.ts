import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHistoricalRatesComponent } from './chart-historical-rates.component';

describe('ChartHistoricalRatesComponent', () => {
  let component: ChartHistoricalRatesComponent;
  let fixture: ComponentFixture<ChartHistoricalRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartHistoricalRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartHistoricalRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
