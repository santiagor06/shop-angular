import { Component, Input, inject, signal } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../../models/Product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;

  handleOpenCart() {
    this.cartService.handleOpenCart();
  }
}
