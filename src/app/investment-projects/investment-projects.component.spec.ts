import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentProjectsComponent } from './investment-projects.component';

describe('InvestmentProjectsComponent', () => {
  let component: InvestmentProjectsComponent;
  let fixture: ComponentFixture<InvestmentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
