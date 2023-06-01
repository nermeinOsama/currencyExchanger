import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperCurrencyExchangerComponent } from './wrapper-currency-exchanger.component';

describe('WrapperCurrencyExchangerComponent', () => {
  let component: WrapperCurrencyExchangerComponent;
  let fixture: ComponentFixture<WrapperCurrencyExchangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperCurrencyExchangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperCurrencyExchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
