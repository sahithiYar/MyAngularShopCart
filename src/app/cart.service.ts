import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : "root"
})
export class CartService {
  items = [];
  constructor( private httpClient : HttpClient) { }
  addItemToCart(item){
    this.items.push(item);
  }

  getCartItems(){
    return this.items;
  }
  clearItemsFromCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices()
  {
    return this.httpClient.get("/assets/shipping.json");
  }
}