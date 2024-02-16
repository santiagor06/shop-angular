import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Output() openCart = new EventEmitter();
  @Input({ required: true }) isOpenCart!: boolean;
  @Input({ required: true }) cart!: Product[];

  handleOpenCart() {
    this.openCart.emit();
  }
}
