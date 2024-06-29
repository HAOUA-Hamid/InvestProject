import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestmentProjectsComponent } from './investment-projects/investment-projects.component';
import { InvestmentOffersComponent } from './investment-offers/investment-offers.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {UserManagementComponent} from "./user-management/user-management.component";
import {AddNewUserComponent} from "./add-new-user/add-new-user.component"
import {MyProjectsComponent } from './my-projects/my-projects.component';
import { MyInvestmentsComponent } from './my-investments/my-investments.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'investment-projects', component: InvestmentProjectsComponent },
  { path: 'investment-offers', component: InvestmentOffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'add-new-user', component: AddNewUserComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'my-investments', component: MyInvestmentsComponent }
];
