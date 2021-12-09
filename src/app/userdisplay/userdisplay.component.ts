import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServicesService } from '../services/rest-services.service';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { User } from '../user'
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {

  columns=["User Id","First Name","Last Name","Email","Phone No","Location","Action"];
  constructor(private formBuilder:FormBuilder,private restservice:RestServicesService,private router:Router, private activatedRoute:ActivatedRoute){};
  arrUsers:User[]=[];
  public userForm!:FormGroup;
  ngOnInit(){
    this.userForm=this.formBuilder.group({
      id:[''],
      firstname:[''],
      lastname:[''],
      email:[''],
      phoneno:[''],
      location:[''],
    });

     this.readData();
   
 }
 readData(){
   
     this.restservice.getUsers().subscribe
      (
       (data:any) =>
       {
         this.arrUsers = data;
       },
      //  (error) => console.log(error)
     )
 }
 idForProductsRouting="";

displayAll(){
  this.idForProductsRouting="";
  this.router.navigate(["userdisplay"]);
  this.restservice.getUsers().subscribe
  (
   (data:any) =>
   {
     this.arrUsers = data;
   },

 )
}
nameForProductsRouting="";
insertData1(){
  
  this.restservice.insertData(this.userForm.value).subscribe
  (
    (data)=>{
      this.readData();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.userForm.reset();
    },
    (error)=> console.log("Unable to Insert record beacuse"+ error)
  )
}
recordNum="";
deleteRecord(value1:any){
  console.log(value1);
  this.restservice.deleteRecord(value1).subscribe
  (
    
     (data)=>{ 
      this.readData();
       alert("Deleted the Record Successfully");
      console.log("Hello");
       
     },
     (error)=> console.log("Unable to Delete record beacuse"+ error)
  )
}
updateRecord(){
  console.log(this.userForm.value);
  this.restservice.updateEmployee(this.userForm.value).subscribe(
    (data)=>{
      alert("Data updated successfully");
      this.readData();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.userForm.reset();
    },
    (error)=>console.log("Unabled to Update the data")
    );
}

showupdate!:boolean;
showadd!:boolean;
  makeaddtrue(){
    this.showupdate=false;
    this.showadd=true;
  }
  // makeupdatetrue(){
  //   this.showupdate=true;
  //   this.showadd=false;
  // }
  onEdit(row:any)
  {
    this.showupdate=true;
    this.showadd=false;

     this.userForm.controls['id'].setValue(row.id);
     this.userForm.controls['firstname'].setValue(row.firstname);
     this.userForm.controls['lastname'].setValue(row.lastname);
     this.userForm.controls['email'].setValue(row.email);
     this.userForm.controls['phoneno'].setValue(row.phoneno);
     this.userForm.controls['location'].setValue(row.location);


  }

}
