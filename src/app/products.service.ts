import { Subject } from 'rxjs';

export class ProductsService {
  private products = ['A Car'];
  productUpdated = new Subject();

  addProducts(productName: string) {
    this.products.push(productName);
    this.productUpdated.next();
  }
  getProducts() {
    return [...this.products];
  }
}
