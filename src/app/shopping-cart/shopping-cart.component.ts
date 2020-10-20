import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart';
import { ProductCartDisplayService } from '../service/product-cart-display.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  carts: Cart[]=[];
  total: number;
  constructor(private cartSer: CartService, private productCartSer: ProductCartDisplayService) {
    
  }

  ngOnInit(): void {
    this.productCartSer.getProductCart().subscribe((product: Product) => {      
      this.addtoCart(product);
      this.calculateTotal();

    })   
  }

  ngOnDestroy() {
   
  }

  addtoCart(product: Product) {
       

    let isproductexists = false;
    
    for (let i in this.carts) {
      if (this.carts[i].productId == product.id) {
        this.carts[i].quantity++;
        isproductexists = true;
        break;       
      }
    }

    if (!isproductexists) {
      this.carts.push(new Cart(1, product.id, product.name, product.price, 1));
      //this.carts = this.cartSer.getCartItem(new Cart(1, product.id, product.name, product.price, 1));
    }    
  }

  calculateTotal() {
    this.total = 0;
    if (this.carts.length > 0) {
      this.carts.forEach(item => {
        this.total += item.productPrice * item.quantity;
      })
    }
  }

  quantityIncrease(cartItem:Cart) {
    for (let i in this.carts) {
      if (this.carts[i].productId == cartItem.productId) {
        this.carts[i].quantity++;        
        break;
      }
    }
    this.calculateTotal();
  }

  quantityDecrease(cartItem: Cart) {
    for (let i in this.carts) {
      if (this.carts[i].productId == cartItem.productId) {
        if (this.carts[i].quantity > 1) {
          this.carts[i].quantity--;
          break;
        }
      }
    }

    this.calculateTotal();
  }


  deleteCartItem(index: number) {   
    this.carts.splice(index, 1);
    this.calculateTotal();    
  }

}
