import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  varIsLoggedIn="isLoggedIn";
  flag=1;
  login(){
    localStorage.setItem(this.varIsLoggedIn,'true');
    this.flag=0;
  }
  logout(){
    localStorage.setItem(this.varIsLoggedIn,'false');
    this.flag=1;
  }
 
}
