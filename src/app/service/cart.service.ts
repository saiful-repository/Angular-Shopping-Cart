import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: Cart[] = [];

  constructor() {
    
  }

  getCartItem(cartItem: Cart): Cart[] {    
    this.carts.push(cartItem);
    return this.carts;
  }
}
