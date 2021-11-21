import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DAY7';
 
  constructor(private authenticationService:AuthenticationService){};
  
  logInForAuthGuard(){
    this.authenticationService.login();
  }
  logOutForAuthGuard(){
    this.authenticationService.logout();
  }
  flaglogout:boolean=false;
  flaglogin:boolean=true;
 
ngDoCheck(){
  if(localStorage.getItem('isLoggedIn')=='true'){
    console.log(this.flaglogin);
    
    this.flaglogin=false;
    this.flaglogout=true;
  }
}
}
