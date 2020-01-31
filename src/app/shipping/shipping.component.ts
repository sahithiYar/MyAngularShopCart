import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service'
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingPrices = [];
  constructor(private cartservice: CartService) { }

  ngOnInit() {
    this.shippingPrices = this.cartservice.getShippingPrices();
  }



}