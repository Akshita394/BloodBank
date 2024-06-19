import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BloodRequestRegistrationComponent } from './blood-request-registration/blood-request-registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DonorlogComponent } from './donorlog/donorlog.component';

import { DoonerRegistratioComponent } from './dooner-registratio/dooner-registratio.component';
import { HomeComponent } from './home/home.component';
import { NewdemoComponent } from './newdemo/newdemo.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "admin_login", component: AdminLoginComponent },
  { path: "dooner_registration", component: DoonerRegistratioComponent },
  { path: "donor_login", component: DonorlogComponent },
  { path: "blood_request", component: BloodRequestRegistrationComponent },
  { path: "newdemo", component: NewdemoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
