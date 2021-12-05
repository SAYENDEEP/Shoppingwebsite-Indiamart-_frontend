// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Products } from '../Product';
// import {map} from 'rxjs/operators';
// import {ProductServiceService} from '../product-service.service';
// import { FormBuilder,FormGroup } from '@angular/forms';
// import { AdminService } from '../admin-service.service'
// import { CartService } from '../services/cart.service';
// @Component({
//   selector: 'app-electronics',
//   templateUrl: './electronics.component.html',
//   styleUrls: ['./electronics.component.css']
// })
// export class ElectronicsComponent implements OnInit {
//   columnI = [
//     'Product Id',
//     "Product Name",
//     "Product Cost",
//     "description",
//     "image",
//     "Rating",
//     "Action"
   
//  ];

//    show!:boolean;
//  showAdd!:boolean;
// showUpdate !:boolean;
//  formValue!: FormGroup;
//  productData:any;
//  productObj:Products=new Products();
//  admindata: any;
//  public productList:any;
//   constructor(private formBuilder:FormBuilder,private api:ProductServiceService,private adminApi:AdminService,private cartservice:CartService) { }

//   ngOnInit(): void {
//     this.formValue=this.formBuilder.group(
//       {
//         productId:[],
//            productName:[''],
//            cost:[],
//            description:[''],
//            image:[''],
           
//             rating:[],
//       })
//       this.api.getAllProduct()
//       .subscribe(res=>{
//         this.productList=res;
//          this.productList.forEach((a:any)=>{
//            Object.assign(a,{quantity:1,total:a.price})
//          });
    
//       }
//     )
//     this.show=this.adminApi.logged;
//     this.getAllProduct();
//   }
   
//   clickAdd()
// {
//   this.formValue.reset();
//   this.showAdd=true;
//   this.showUpdate=false;
  
// }
// postProductDetails() {
  
//   this.productObj.productId=this.formValue.value.productId;
//   this.productObj.productName=this.formValue.value.productName;
//   this.productObj.cost=this.formValue.value.cost;
//   this.productObj.description=this.formValue.value.description;
//   this.productObj.rating=this.formValue.value.rating;
   
 
  
//   this.api.postProduct(this.productObj).subscribe(
//     (res) => {
//       console.log(res);
//       alert('Product Details added successfuly');
//       let ref = document.getElementById('cancel');
//       ref?.click();
//       this.formValue.reset();
//       this.getAllProduct();
//     },
//     (err) => {
//       alert('something went wrong!');
//     }
//   );
// }
// arrProduct1:Products[]=[];
// getAllProduct() {
//   this.api.getAllProduct().subscribe((res) => {
//     this.productData = res;
//      this.arrProduct1=res; 
//   });
// }
// deleteProduct(row: any) {
//   this.api.deleteProduct(row.id).subscribe((res) => {
//     alert('Product Details is Deleted');
//     this.getAllProduct();
//   });
// }
// onEdit(row: any) {
//   this.showUpdate=true;
//   this.showAdd=false;
//   this.productObj.id=row.id;
//   this.formValue.controls['productId'].setValue(row.productId);
//   this.formValue.controls['productName'].setValue(row.productName);
//   this.formValue.controls['cost'].setValue(row.cost);
//   this.formValue.controls['description'].setValue(row.description);
//   this.formValue.controls['rating'].setValue(row.rating); 
// }
// updateProductDetails() {
//   this.productObj.productId = this.formValue.value.productId;
//   this.productObj.productName = this.formValue.value.productName;
//   this.productObj.cost = this.formValue.value.cost;
//   this.productObj.description=this.formValue.value.description;
//   this.productObj.rating = this.formValue.value.rating;
 

//   this.api.updateProduct(this.productObj,this.productObj.id)
//   .subscribe(res=>
//     {
//       alert("Updated Successfully");
//       let ref = document.getElementById('cancel');
//       ref?.click();
//       this.formValue.reset();
//       this.getAllProduct();
//     })
// }
// addtoCart(item:any){
//    this.cartservice.addtoCart(item);
// }

// }
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin-service.service';
import { CartService } from '../services/cart.service';
import {ProductServiceService} from '../services/product-service.service';


@Component({
    selector: 'app-electronics',
    templateUrl: './electronics.component.html',
    styleUrls: ['./electronics.component.css']
  })
  export class ElectronicsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private api : ProductServiceService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getAllProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        
        Object.assign(a,{quantity:1,total:a.price});
      });
      this.cartService.getProducts()
       .subscribe(res=>{
        this.totalItem = res.length;
        // console.log(this.totalItem);
      })
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
   
    this.cartService.addtoCart(item);
 
   
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

 
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
