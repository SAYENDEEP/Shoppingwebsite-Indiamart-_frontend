import { Component, OnInit } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PaymentService } from '../../services/payment.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  ///////////////////
  elements: any;
  card: any;
 
  // optional parameters
  elementsOptions: StripeElementsOptions = {
    locale: 'auto'
  };
 
  stripeTest!: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private PaymentService:PaymentService,
    private cartService : CartService,
    private router:Router
    ) {

    }

  // PaymentDetailsObject:any={
  //   amount:this.totalprice
  // }
 
  ngOnInit() {
    
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
      this.totalprice=this.cartService.totalprice;
  }
  ispending=true;
  isdone=false;
  buy() {
    const name = this.stripeTest.value.name;
    
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        console.log(result);
        if (result.token) {
          let payment={result:result,price:this.totalprice}
          console.log(payment);
          this.router.navigate(['/thanku']);
          this. PaymentService.Payment(payment).subscribe((data)=>{
            console.log(data)
          },(err)=>{
            console.log(err);
          })
          
          console.log(result.token);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
     
      this.totalprice=this.cartService.totalprice;
      // this.router.navigate(['/thanku']);
  }
     totalprice=0;
     
}
