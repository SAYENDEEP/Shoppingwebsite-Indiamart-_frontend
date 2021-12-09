import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators,FormControlName, FormControl} from "@angular/forms"
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {LoginregisterService} from '../services/loginregister.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm!:FormGroup;
  constructor(private formBuidler:FormBuilder,private LoginregisterService:LoginregisterService) { }

  ngOnInit(): void {
    this.contactForm=this.formBuidler.group({
      Firstname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      Message:['']
  })
  }
 

contact1(){
  this.LoginregisterService.contactUser(this.contactForm.value).subscribe
  (
    (data)=>
    {
      alert("Thanku you!! Your query is send Successfully We will get Back to you shortly");
      console.log(JSON.stringify(data));
    },
    (error)=> console.log("Error encountered")
  );
 }
}
