import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { DessertComponent } from './dessert/dessert.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutInfoComponent } from './checkout-info/checkout-info.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutDoneComponent } from './checkout-done/checkout-done.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DessertComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    CheckoutInfoComponent,
    CheckoutFormComponent,
    CheckoutDoneComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
