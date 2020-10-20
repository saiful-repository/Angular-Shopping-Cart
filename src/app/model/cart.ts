export class Cart {
  CartId: number;
  productId: number;
  productName: string;  
  productPrice: number;
  quantity: number;

  constructor(CartId, productId, productName, productPrice, quantity) {
    this.CartId = CartId;
    this.productId = productId;
    this.productName = productName;
    this.productPrice = productPrice;
    this.quantity = quantity;
  }
}
