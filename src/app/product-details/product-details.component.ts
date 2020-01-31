import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {products} from '../products';
import {CartService} from '../cart.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  routedProduct;
  constructor( private router: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
        this.routedProduct = products[params.get('productId')] 
    })
  }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addItemToCart(product);
     }

}