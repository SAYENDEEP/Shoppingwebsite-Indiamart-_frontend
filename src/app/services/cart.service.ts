
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
  // getProducts(){
  //   return this.productList.asObservable();
  // }

  // setProduct(product : any){
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  addtoCart(product : any){
    
    // this.cartItemList.push(product);
    // console.log(this.cartItemList);
    // this.productList.next(this.cartItemList);
    // console.log(this.productList);
    
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
  // removeCartItem(product: any){
  //   this.cartItemList.map((a:any, index:any)=>{
  //     if(product.id=== a.id){
  //       this.cartItemList.splice(index,1);
  //     }
  //   })
  //   this.productList.next(this.cartItemList);
  // }
  
  // removeAllCart(){
  //   this.cartItemList = []
  //   this.productList.next(this.cartItemList);
  // }
  URL5="http://localhost:8001/Cart";
  addtojson(data:any,quantity:number)
  {   
    var URL=this.URL5+'/insertCart';
    let header ={'content-type':'application/json'};
     this.http.post(URL,data,{'headers':header,responseType:'text'})
     .subscribe(res=>  
     {
       console.log("Successfully added into cart");
        alert("Successfully added into cart");
        
     },
     err=>{
      alert("Product already in the Cart");
     })
    }
  getAllProduct()
  {
    var URL=this.URL5+'/getCart'
    return this.http.get(URL)
  }
 
deleteCart(id:number)
  {   
   
    let deleteURL= this.URL5+"/deleteCart/"+id;

   return this.http.delete(deleteURL,{responseType:'text'});
  }
updateCart(id:number,data:any)
  { 
    var URL=this.URL5+"/updateCart";
    let header ={'content-type':'application/json'}
    return this.http.put(URL,data,{'headers':header,'responseType':'text'});
  }
  length=0;
URL1="http://localhost:8001/Products";
 getAllProduct1(){
  var URL=this.URL1+'/Products'
   return this.http.get(URL);
  }
   totalprice=0;
  EmptyCart(){
    var URL=this.URL5+"/deleteAllCart"
    return this.http.delete(URL,{responseType:'text'});
  }
}