import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServicesService } from '../services/rest-services.service';
import { User } from '../user'
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {

  columns=["User Id","First Name","Last Name","Email","Phone No","Location"];
  constructor(private restservice:RestServicesService,private router:Router, private activatedRoute:ActivatedRoute){};
  arrUsers:User[]=[];

  ngOnInit(){
    // this.activatedRoute.paramMap.subscribe((param)=>{
    // this.idForProductsRouting =Number(param.get('id'));
    //  this.nameForProductsRouting= String(param.get('firstname'));
    // if(this.idForProductsRouting>0 ){
        // if(this.idForProductsRouting>0)
        //  this.displayBasedOnID();
        // else
        //   this.displayBasedOnName();
    // }
    //  if(this.nameForProductsRouting!=""){
    //   console.log("2");
    //  this.displayBasedOnName();

    // }
    // else{
    //   console.log("3");
     this.readData();
    // } 
    // });
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
//  routeBasedOnId(){
//    let strURLForProductsFilterById="";
//    if(this.idForProductsRouting >0)
//      strURLForProductsFilterById ="userdisplay/"+this.idForProductsRouting;

//      this.router.navigate([strURLForProductsFilterById]);
//  }
//  displayBasedOnID(){
//   this.restservice.getProductsOnId(this.idForProductsRouting).subscribe
//   (
//     (data)=>{
//       this.arrUsers=data;
//     }
//   )
// }

displayAll(){
  this.idForProductsRouting="";
  this.router.navigate(["userdisplay"]);
  this.restservice.getUsers().subscribe
  (
   (data:any) =>
   {
     this.arrUsers = data;
   },
  //  (error) => console.log(error)
 )
}
nameForProductsRouting="";
// routeBasedOnName(){
//   let strURLForProductsFilterByName="";
//   if(this.nameForProductsRouting !="")
//     strURLForProductsFilterByName ="userdisplay/"+this.nameForProductsRouting;

//     this.router.navigate([strURLForProductsFilterByName]);
// }
// displayBasedOnName(){
//   this.restservice.getProductsOnName(this.nameForProductsRouting).subscribe
//   (
//     (data)=>{
//       this.arrUsers=data;
//     }
//   )
// }
}
