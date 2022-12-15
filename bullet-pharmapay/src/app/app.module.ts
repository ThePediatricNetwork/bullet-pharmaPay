import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { RegMobComponent } from './reg-mob/reg-mob.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClinicComponent } from './clinic/clinic.component';
import { EnterAmtComponent } from './enter-amt/enter-amt.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OtpLoginComponent,
    ClinicComponent,
    EnterAmtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
