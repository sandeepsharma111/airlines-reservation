import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { RigisterComponent } from './rigister/rigister.component';
import { AboutComponent } from './about/about.component';
import { FlightlistMultyComponent } from './flightlist-multy/flightlist-multy.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService } from './services/alert.service';
//import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';

const appRoutes: Routes = [
  {
   path: 'home',
   component: FlightlistMultyComponent
 },
   {
    path: 'login',
    component: LoginComponent
  },
    {
     path: 'logout',
     component: LoginComponent
   },
  {
    path: '**',
    redirectTo: 'home'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RigisterComponent,
    AboutComponent,
    FlightlistMultyComponent,
    CardPaymentComponent,
    //FieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, { useHash: true}
    ),
    ReactiveFormsModule
  ],
  providers: [UserService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
