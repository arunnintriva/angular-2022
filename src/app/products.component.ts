import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'a book';
  isDisabled = true;
  products = ['a book', 'a tree', 'a pen'];

  constructor() {
    // setTimeout(() => {
    //   // this.productName = 'a tree';
    //   this.isDisabled = false;
    // }, 3000);
  }
  onAddProducts() {
    this.products.push(this.productName);
  }
}
