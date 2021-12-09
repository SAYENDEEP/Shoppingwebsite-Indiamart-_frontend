
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin-service.service';
import { CartService } from '../services/cart.service';


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
  length1=0;
  constructor( private cartService : CartService,private Router:Router) { }

  ngOnInit(): void {
    this.cartService.getAllProduct1().subscribe(
      (res:any)=>{
      this.productList = res;
      this.filterCategory = res;
      // this.productList.forEach((a:any) => {
        
      //   Object.assign(a,{quantity:1,total:a.price});
      // });
      // this.cartService.getProducts()
      //  .subscribe(res=>{
      //   this.totalItem = res.length;
      // })
    
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    this.length1=this.cartService.length;
  }
  addtocart(item: any){
   
    this.cartService.addtoCart(item);
    this.length1=this.cartService.length;
    this.length1=this.length1+1;
    this.cartService.length=this.length1;
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
