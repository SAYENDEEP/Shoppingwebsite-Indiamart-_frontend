import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuarService {

  constructor(private router:Router) { }
  canActivate(){
    let breturn =true;
    if(localStorage.getItem('isLoggedIn')=='false'){
      alert("Sorry, you are not allowed to view this page Please Login");
      this.router.navigate(['./home']);
      breturn=false;
    } 
    return breturn;
  }
}
