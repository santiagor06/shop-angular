import { Component, Input, inject, signal } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { CartComponent } from '@shared/components/cart/cart.component';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, RouterLinkWithHref, RouterLinkActive],
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
