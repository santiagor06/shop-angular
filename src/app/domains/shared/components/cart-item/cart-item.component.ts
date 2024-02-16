import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input({ required: true }) product!: Product;
}
