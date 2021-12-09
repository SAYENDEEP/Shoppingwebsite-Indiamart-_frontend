import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators,FormControlName, FormControl} from "@angular/forms"
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login';
import { AdminService } from '../services/admin-service.service';
import {LoginregisterService} from '../services/loginregister.service'


import {AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup;
  constructor(private formBuidler:FormBuilder,private http:HttpClient,private router:Router,private adminService:AdminService,private authservive:AuthenticationService,private LoginregisterService:LoginregisterService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuidler.group({
      Emailno:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(6)]]
  })
}
 username:any;

login()
  {
    // console.log(this.loginForm.controls);
//  this.loginForm = new FormGroup({
//   Emailno:new FormControl('',[Validators.required,Validators.email]),
//   Password:new FormControl('',[Validators.required,Validators.minLength(6)])
//  })
    // this.http.get<any>("http://localhost:3000/signUpUsers").subscribe
     
    this.LoginregisterService.loginUser(this.loginForm.value).subscribe
    ((res)=>{
    //  const user= res.find((a:any)=>{
    //    this.username=a.firstName
    //  return a.Emailno===this.loginForm.value.Emailno && a.password===this.loginForm.value.password
    //  });
      console.log(res);
       
      if(res=="User Name Correct .Please check your Password"){
         alert("User Name Correct .Please check your Password");
         this.loginForm.reset();
         this.router.navigate(['login']);
     }
     else if(res=="User Login UnSuccessful"){
       alert("user not found you have entered wrong username or password");
       this.router.navigate(['login']);

     }else{
      alert("Login Success!!"+res);
       
      localStorage.setItem("username",res);
      
     //  this.fillLoginData();
      this.authservive.login(); 
      this.loginForm.reset();
      this.router.navigate(['home']);
     }
    },err=>{
      alert("Something went wrong!!");
    }
    )
  
 }
}

