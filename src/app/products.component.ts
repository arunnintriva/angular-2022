import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'a book';
  isDisabled = true;
  products = [];
  private productSubscription: Subscription;

  constructor(private productService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productSubscription = this.productService.productUpdated.subscribe(
      () => {
        this.products = this.productService.getProducts();
      }
    );
  }
  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
  onAddProduct(form) {
    if (form.valid) {
      console.log(form);
      this.productService.addProducts(form.value.productName);
    }
  }
  onRemoveProduct(productName: string) {
    this.products = this.products.filter((p) => p !== productName);
  }
}
