import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder } from '@angular/forms'

import { CartService } from "../cart.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems; checkoutForm;
  constructor(private cartService : CartService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData){
    console.warn('Your order has been submitted', customerData);

    this.cartItems = this.cartService.clearItemsFromCart();
    this.checkoutForm.reset();
  }

}