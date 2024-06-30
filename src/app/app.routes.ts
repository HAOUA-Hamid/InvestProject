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
import {ProjectApprovalComponent} from "./project-approval/project-approval.component";
import {AnalyticsComponent} from "./analytics/analytics.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {TermsOfServiceComponent} from "./terms-of-service/terms-of-service.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";

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
  { path: 'my-investments', component: MyInvestmentsComponent },
  { path: 'project-approval', component: ProjectApprovalComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'terms', component: TermsOfServiceComponent },
  { path: 'privacy', component: PrivacyPolicyComponent }
];
