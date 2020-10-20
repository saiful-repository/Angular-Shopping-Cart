import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() cartItem: Cart;
  @Input() index: number;

  @Output() quantityIncrease: EventEmitter<Cart> = new EventEmitter();
  @Output() quantityDecrease: EventEmitter<Cart> = new EventEmitter();
  @Output() deleteCartItem: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callquantityIncrease() {
    this.quantityIncrease.emit(this.cartItem);
  }

  callquantityDecrease() {
    this.quantityDecrease.emit(this.cartItem);
  }

  calldeleteCartItem() {
    this.deleteCartItem.emit(this.index);
  }

}
