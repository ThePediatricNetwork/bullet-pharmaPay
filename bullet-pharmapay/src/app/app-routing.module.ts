import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';

const routes: Routes = [
  { path:'' , redirectTo:'/home', pathMatch:'full'},
  { path: 'home' , component:HomePageComponent},
  { path: 'otp' , component:OtpLoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
