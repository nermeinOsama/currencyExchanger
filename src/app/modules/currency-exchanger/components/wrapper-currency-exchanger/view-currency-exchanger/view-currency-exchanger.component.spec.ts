import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrencyExchangerComponent } from './view-currency-exchanger.component';

describe('ViewCurrencyExchangerComponent', () => {
  let component: ViewCurrencyExchangerComponent;
  let fixture: ComponentFixture<ViewCurrencyExchangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCurrencyExchangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrencyExchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
