
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public cartlength:any;

  constructor(private http:HttpClient) { }
  getProducts(){
  
    return this.productList.asObservable();
  
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    product.quantity=1;
    this.addtojson(product,1);
    // console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.quantity*a.Cost);
     
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  addtojson(data:any,quantity:number)
  {     
    this.http.post<any>("http://localhost:3000/cart",data)
    .subscribe(res=>
      {
         
        console.log("added successfully");
          
      },
      err=>{
        alert("SomeThing Went wrong!");
      })
    }
    getAllProduct()
  {
    return this.http.get<any>("http://localhost:3000/cart")
    .pipe(map((res:any)=>
    {  
      return res;
      
    }))
  
}

updateCart(id:number,data:any)
  {
    return this.http.put<any>("http://localhost:3000/cart/"+id,data)
    .pipe(map((res:any)=>{
    return res;
    }))
  }
}