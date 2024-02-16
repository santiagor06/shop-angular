import { Component, Input, signal } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) cart: Product[] = [];
  isCartOpen = signal<boolean>(true);
  handleOpenCart() {
    this.isCartOpen.update((prevState) => !prevState);
  }
  takeChild() {
    this.isCartOpen.update((prevstate) => !prevstate);
  }
}
