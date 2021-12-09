import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import {LoginregisterService} from '../services/loginregister.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  public forgetForm!:FormGroup;
  public otpForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private LoginregisterService:LoginregisterService,private router:Router) { }

  ngOnInit(): void {
    this.forgetForm=this.formBuilder.group({
 
      Emailno :['',[Validators.required,Validators.email]],
      
    }),
    this.otpForm=this.formBuilder.group({
      Emailno :['',[Validators.required,Validators.email]],
      otp:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.email]],
      CPassword :['',[Validators.required,Validators.email]],
    })
  }
  isforget=true;
  isotp=false;
  otp:any;
  Emailno:any;
  sendmail1(){
    
    this.LoginregisterService.SendOTP({Emailno:this.forgetForm.value.Emailno}).subscribe 
      ( 
        
        (data) => 
        {
          data = JSON.parse(data);
          alert(data.message);
          // console.log("otp sent");
          if(data.flag==true){
            this.otp=data.otp;
            this.Emailno=data.Emailno;
            console.log("Otp"+this.otp+"Emailno"+this.Emailno);
            this.isforget=false;
            this.isotp=true;
          }
        }, 
        (error) => 
        {
          alert(JSON.parse(error));
          console.log("otp send failed" + error.getMessage);
        }
    );
  }

  verifyotp(){
    // this.submitted = true;
    let Emailno= this.otpForm.value.Emailno;
    let otp = this.otpForm.value.otp;
    // let Password = this.otpForm.value.Password;
    var userObj = {
      "Emailno" : this.otpForm.value.Emailno,
      "Password" : this.otpForm.value.Password
    }
    // if(this.otpForm.invalid){
    //   alert("fill all details pls");
    //   return;
    // }
    // else{
      if(otp==this.otp && Emailno==this.Emailno){
        this.LoginregisterService.UpdatePassword(userObj).subscribe 
        ( 
          (data) => 
          {
            alert(JSON.parse(data).message);
            console.log("password updated");
            
            this.router.navigate(['/login']);
          }, 
          (error) => 
          {
            alert(JSON.parse(error));
            console.log("password reset failed" + error.getMessage);
          }
        );
      }
      else{
        if(this.Emailno!=Emailno)
          alert("Invalid mail");
        else
          alert("Invalid OTP");
       
      }   
  }

//  }
}