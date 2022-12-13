import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegMobComponent } from './reg-mob/reg-mob.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegMobComponent,
    OtpLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
