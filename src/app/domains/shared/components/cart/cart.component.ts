import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
  signal,
} from '@angular/core';
import { Product } from '../../models/Product.model';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Output() openCart = new EventEmitter();
  @Input({ required: true }) isOpenCart!: boolean;
  @Input({ required: true }) cart: Product[] = [];
  total = signal(0);
  ngOnChanges(changes: SimpleChanges) {
    let cart = changes['cart'];
    if (cart) {
      this.total.set(this.getTotal());
    }
  }

  handleOpenCart() {
    this.openCart.emit();
  }
  getTotal(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
