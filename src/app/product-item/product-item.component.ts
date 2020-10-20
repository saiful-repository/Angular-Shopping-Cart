import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductCartDisplayService } from '../service/product-cart-display.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private productCartSer:ProductCartDisplayService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.productCartSer.addProductToCart(this.productItem);
  }

}
