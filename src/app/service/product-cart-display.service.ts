import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartDisplayService {

  subject = new Subject();

  constructor() {
   
  }

  addProductToCart(product:Product) {
    this.subject.next(product);
  }

  getProductCart() {
    return this.subject.asObservable();
  }

  UnsubscribeSubject() {
     this.subject.unsubscribe();
  }
}
