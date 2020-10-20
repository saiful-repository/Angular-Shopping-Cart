import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]=[];

  constructor() { }

  getProduct(): Product[] {
    this.products = [];
    this.products.push(new Product(1, "laptop 1", "high quality laptop", 2000, "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg"))
    this.products.push(new Product(2, "laptop 2", "medium quality laptop", 1800, "https://c.s-microsoft.com/en-us/CMSImages/1920_Panel1_Hero_Laptop.jpg?version=090f3049-8032-1102-e65b-498904a634e1"))
    this.products.push(new Product(3, "laptop 3", "high quality laptop", 2500, "https://cdn.mos.cms.futurecdn.net/A4GDK27VMnz6LtFDy9yzk.jpg"))
    this.products.push(new Product(4, "laptop 4", "medium quality laptop", 2200, "https://images.anandtech.com/doci/15680/Swift-3_SF314-42_front-facing.jpg"))
    this.products.push(new Product(5, "laptop 5", "high quality laptop", 2400, "https://images-na.ssl-images-amazon.com/images/I/81SdJG3OUjL._SL1500_.jpg"))
    this.products.push(new Product(6, "laptop 6", "medium quality laptop", 2300, "https://i.pcmag.com/imagery/reviews/03LdqcXV2Tj9fdNcEjQULy2-1.1594129071.fit_lpad.size_625x365.jpg"))
    return this.products;
  }

}
