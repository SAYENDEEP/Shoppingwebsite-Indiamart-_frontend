import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { NopagefondComponent } from './nopagefond/nopagefond.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { FilterTablePipe } from './filter-table.pipe';
import { CardComponent } from './card/card.component';
import { FilterPipe } from './filter.pipe';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NgxStripeModule } from 'ngx-stripe';
import { ThankuComponent } from './Component/thanku/thanku.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ElectronicsComponent,
    NopagefondComponent,
    UserdisplayComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    FilterTablePipe,
    CardComponent,
    FilterPipe,
    CheckoutComponent,
    ForgetpasswordComponent,
    ThankuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51K4WvDSD54SloB46t8xzL3H8LOJAhzkbREnq4x2QBY5Mif1aRaBBCtofAwAqNP3btHwtXum1VfhWzATIQLfrHvHs00oxxR6uvu')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
