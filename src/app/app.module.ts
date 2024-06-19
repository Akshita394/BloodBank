import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoonerRegistratioComponent } from './dooner-registratio/dooner-registratio.component';
import { HttpClientModule } from '@angular/common/http';
import { BloodRequestRegistrationComponent } from './blood-request-registration/blood-request-registration.component';
import { DonorlogComponent } from './donorlog/donorlog.component';
import { NewdemoComponent } from './newdemo/newdemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    AdminLoginComponent,
    DoonerRegistratioComponent,

    BloodRequestRegistrationComponent,
    DonorlogComponent,
    NewdemoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
