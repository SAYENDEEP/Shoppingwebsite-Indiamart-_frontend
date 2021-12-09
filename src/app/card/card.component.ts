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
    // this.cartService.getAllProduct().subscribe(res=>{
      // this.products = res;
     this.getAllProduct(); 
    // })
  }
  
  removeItem(item: any){
    this.cartService.deleteCart(item.id).subscribe((res) => {
      // alert('Product Details is Deleted');
      this.getAllProduct();
         
    });
  }
  emptycart(){
    //  this.cartData = []
    this.cartService.EmptyCart().subscribe((res) => {
      alert('Cart is Empty');
      this.getAllProduct();
         
    });
  }
  incQuant(id:number)
 {
  //  console.log("Hello");
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
    console.log(this.cartData);
   this.cartService.cartlength=this.cartData.length;
   this.totalprice();
     this.cartService.length=this.cartData.length;
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
  this.changeinjson(id,this.quantValue) 
}
changeinjson(id:number,quantity:number)
{
  this.getAllProduct(); 
  var  arrProducts1 = this.cartData.find((t:any)=> t.id == id);
     arrProducts1.quantity=quantity;
  this.updateCart(arrProducts1.id,arrProducts1);
  
}
Totalprice=0;
totalprice(){
  var amount=0; 
  for( var item of this.cartData)
  { 
     amount=amount+(item.quantity*item.cost); 
  }
  // console.log(amount);
  this.Totalprice= amount;
  this.cartService.totalprice=this.Totalprice;
  console.log(this.cartService.totalprice);
}

}

