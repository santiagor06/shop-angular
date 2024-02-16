import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Product } from '../../../shared/models/Product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();
  handleAddToCart() {
    console.log('estoy en el hijo');
  }
}
