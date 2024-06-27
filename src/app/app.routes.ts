import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestmentProjectsComponent } from './investment-projects/investment-projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'investment-projects', component: InvestmentProjectsComponent },
];
