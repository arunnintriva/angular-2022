import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  @Output() productClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClicked() {
    this.productClicked.emit();
  }
}
