import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOffersComponent } from './investment-offers.component';

describe('InvestmentOffersComponent', () => {
  let component: InvestmentOffersComponent;
  let fixture: ComponentFixture<InvestmentOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
