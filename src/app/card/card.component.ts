import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public products : any = [];
  public cartData:any;
  public grandTotal !: number;
  public quantValue!:number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      // console.log(res);
      // this.grandTotal = this.cartService.getTotalPrice();
      
      this.getAllProduct(); 
     
    })
      // this.totalprice();
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  incQuant(id:number)
 {
   console.log("Hello");
  var  arrProducts1 = this.cartData.find((t:any)=> t.id === id);
  
  arrProducts1.quantity++;
  this.updateCart(arrProducts1.id,arrProducts1);
}
decQuant(id:number)
{
  var  arrProducts1 = this.cartData.find((t:any)=> t.id === id);
     if(arrProducts1.quantity<=1)
     {
      this.updateCart(arrProducts1.id,arrProducts1);
     }
     else
     {
   arrProducts1.quantity--;
   this.updateCart(arrProducts1.id,arrProducts1);
     }
}
getAllProduct() {  
  this.cartService.getAllProduct().subscribe((res) => {
    this.cartData = res;
   this.cartService.cartlength=this.cartData.length;
   this.totalprice();
      // console.log(this.cartData);
      // console.log("running");
      // this.price=this.calculatePrice();
      //  this.dilivery();
        // this.discount=this.discountCal()
      // this.TotalAmount();
  });

}
updateCart(id:number,data:any)
{
  
  this.cartService.updateCart(id,data).subscribe((res)=>
  {
 
    this.getAllProduct();
  })
}
find(event:any,id:number){
  this.quantValue = Number((event.target as HTMLInputElement).value);
  // console.log(this.quantValue);
  // console.log(id);

  this.changeinjson(id,this.quantValue) 
}
changeinjson(id:number,quantity:number)


{
  this.getAllProduct(); 
  var  arrProducts1 = this.cartData.find((t:any)=> t.id == id);
  
     
  
     arrProducts1.quantity=quantity;
    
      //  console.log( arrProducts1.quantity);
  this.updateCart(arrProducts1.id,arrProducts1);
  
}
Totalprice=0;
totalprice(){
  var amount=0;

  // for(var i=0;i<this.cartData.length;i++){
  //   totalprice=totalprice+(this.cartData[i].quantity*this.cartData[i].cost);
  //   console.log(totalprice);
  // }
  console.log(this.cartData);
  
  for( var item of this.cartData)
  {
    
     amount=amount+(item.quantity*item.cost);
     
     
  }
  console.log(amount);
  this.Totalprice= amount;
}
}

