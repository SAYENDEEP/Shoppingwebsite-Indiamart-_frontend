import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      number :['',[Validators.required, Validators.pattern("[0-9 ]{12}")]],
      email :['',[Validators.required,Validators.email]],
      admin:[''],
      location:['',Validators.required],
      
    })
  }
  signUp()
  {
    if(this.signupForm.value.admin==true){
      this.http.post<any>("http://localhost:3000/admin",this.signupForm.value)
      .subscribe(res=>
        {
          
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        err=>{
          alert("SomeThing Went wrong!");
        })
      }
    this.http.post<any>("http://localhost:3000/signUpUsers",this.signupForm.value)
    .subscribe(res=>
      {
        alert("signUpSuccessFull");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      err=>{
        alert("SomeThing Went wrong!");
      })
  }

}
