import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {LoginregisterService} from '../services/loginregister.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router,private LoginregisterService:LoginregisterService) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Password:['',[Validators.required,Validators.minLength(6)]],
      Phoneno:['',[Validators.required, Validators.pattern("[0-9 ]{10}")]],
      Emailno :['',[Validators.required,Validators.email]],
      // admin:[''],
      Location:['',Validators.required],
      
    })
  }
  signUp()
  {
    this.LoginregisterService.registerUser(this.signupForm.value).subscribe
    (
      (data)=>
      {
        alert(data);
        console.log(JSON.stringify(data));
        this.router.navigate(['/login']);
      },
      (error)=> console.log("Error encountered")
    );   
   
  }

}
