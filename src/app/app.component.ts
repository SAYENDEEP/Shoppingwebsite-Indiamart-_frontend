import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Indiamart';
 username1:any;
 
  constructor(private authenticationService:AuthenticationService){
    this.username1=localStorage.getItem("username");
  };
  
  logInForAuthGuard(){
    this.authenticationService.login();
  }
  logOutForAuthGuard(){
    this.authenticationService.logout();
    localStorage.removeItem("username");
  }
  flaglogout:boolean=false;
  flaglogin:boolean=true;
 
ngDoCheck(){
  if(localStorage.getItem('isLoggedIn')=='true'){
    console.log(this.flaglogin);
    this.username1=localStorage.getItem("username");
    this.flaglogin=false;
    this.flaglogout=true;
  }
}
}
