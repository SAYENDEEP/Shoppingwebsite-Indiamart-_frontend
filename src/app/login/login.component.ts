import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {FormBuilder,FormGroup,Validator, Validators} from "@angular/forms"
=======
import {FormBuilder,FormGroup,Validator, Validators,FormControlName, FormControl} from "@angular/forms"
>>>>>>> main
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login';
import { AdminService } from '../services/admin-service.service';

import {AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup;
  constructor(private formBuidler:FormBuilder,private http:HttpClient,private router:Router,private adminService:AdminService,private authservive:AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuidler.group({
<<<<<<< HEAD
      email:['',Validators.required],
      password:['',Validators.required]
=======
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
>>>>>>> main
  })
}
testadmin()
  {
    this.http.get<any>("http://localhost:3000/admin").subscribe(res=>{
      const user= res.find((a:any)=>{
      return a.email===this.adminService.data.email && a.password===this.adminService.data.password
      });
      if(user)
      {
        this.adminService.logged=true;
        console.log(this.adminService.logged)
      }
      else
      {
        this.adminService.logged=false;
      }
      
  },err=>
  {
    console.log("not admin");
  })

}
   public loginData:Login=new Login();
  
    fillLoginData()
    {  console.log("Running");
      this.loginData.email=this.loginForm.value.email;
      
      this.loginData.password=this.loginForm.value.password;
      this.adminService.data= this.loginData;
         this.testadmin();
      

      // console.log(this.adminService.data.email);
      // console.log(this.adminService.data.password);
    }
<<<<<<< HEAD

login()
  {
    this.http.get<any>("http://localhost:3000/signUpUsers").subscribe(res=>{
     const user= res.find((a:any)=>{
=======
username:any;

login()
  {
    console.log(this.loginForm.controls);
//  this.loginForm = new FormGroup({
//   email:new FormControl('',[Validators.required,Validators.email]),
//   password:new FormControl('',[Validators.required,Validators.minLength(6)])
//  })
    this.http.get<any>("http://localhost:3000/signUpUsers").subscribe(res=>{
     const user= res.find((a:any)=>{
       this.username=a.firstName
>>>>>>> main
     return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
     });
     if(user)
     {
       alert("Login Success!!");
<<<<<<< HEAD
=======
       localStorage.setItem("username",this.username);
>>>>>>> main
       this.fillLoginData();
       this.authservive.login(); 
       this.loginForm.reset();
       this.router.navigate(['home']);

     }else{
       alert("user not found you have entered wrong username or password");
       this.router.navigate(['login']);

     }
    },err=>{
      alert("Something went wrong!!");
    }
    )
  }


}
