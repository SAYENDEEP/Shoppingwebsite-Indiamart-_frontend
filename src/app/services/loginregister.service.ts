import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginregisterService {

  constructor(private http:HttpClient) { }

  URL="http://localhost:8001/LoginRegister";
  registerUser(signupForm:any):Observable<any>{
     console.log(signupForm);
    var URL=this.URL+'/register';
    let header ={'content-type':'application/json'};
     return this.http.post(URL,signupForm,{'headers':header,responseType:'text'});  
  }
  loginUser(loginform:any):Observable<any>{
    // console.log(loginform);
    var URL=this.URL+'/login';
    let header ={'content-type':'application/json'};
     return this.http.post(URL,loginform,{'headers':header,responseType:'text'});
   }
   URL3="http://localhost:8001/ContactUser"
   contactUser(contactform:any):Observable<any>{
     var URL=this.URL3+'/contact';
     let header ={'content-type':'application/json'};
     return this.http.post(URL,contactform,{'headers':header,responseType:'text'});
   }
  
   SendOTP (email : any) : Observable<any> { 
    var URL = this.URL + "/forget"; 
    let header ={'content-type' : 'application/json'};
    console.log(URL); 
    console.log ("otp to be sent on email : "+email); 
    return this.http.post(URL, email, {'headers' : header , responseType : 'text'}); 
  }
  UpdatePassword  (passwordObj : any) : Observable<any> { 
    var URL = this.URL+ "/updatePassword"; 
    let header ={'content-type' : 'application/json'}; 
    console.log ("Data to be updated in the  user db : "+JSON.stringify(passwordObj)); 
    return this.http.put(URL, passwordObj, {'headers' : header , responseType : 'text'}); 
  }

}
