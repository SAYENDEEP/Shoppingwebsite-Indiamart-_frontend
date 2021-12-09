import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { NopagefondComponent } from './nopagefond/nopagefond.component';
import { UserdisplayComponent } from  './userdisplay/userdisplay.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuarService } from './services/auth-guar.service';
import { CardComponent } from './card/card.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ThankuComponent } from './Component/thanku/thanku.component';
const routes: Routes = [
   {path:'',redirectTo:"/home",pathMatch:'full'},
   {path:'home', component:HomeComponent},
   {path:'aboutus',component:AboutComponent,canActivate:[AuthGuarService]},
   {path:'electronics',component:ElectronicsComponent,canActivate:[AuthGuarService]},
   {path:'electronics/cart',component:CardComponent},
   {path:'contact',component:ContactComponent,canActivate:[AuthGuarService]},
   {path:'userdisplay',component:UserdisplayComponent,canActivate:[AuthGuarService]},
  //  {path:'userdisplay/:firstname',component:UserdisplayComponent},
    {path:'userdisplay/:id',component:UserdisplayComponent,canActivate:[AuthGuarService]},
    {path:'payment',component:CheckoutComponent},
    {path:'login',component:LoginComponent},
   {path:'signUp',component:SignupComponent},
   {path:'forget',component:ForgetpasswordComponent},
   {path:'thanku',component:ThankuComponent},
   {path:'**',component:NopagefondComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
