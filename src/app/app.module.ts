import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { ResturantsComponent } from './components/restaurants/resturants.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersModule } from './components/restaurants/orders/orders.module';
import { ResturantsModule } from './components/restaurants/resturants.module';
import { UsersModule } from './components/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    SideNavbarComponent,
    ResturantsComponent,
   
   
    
    CartComponent,
    CheckoutComponent,
    
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    ResturantsModule,
    UsersModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
