import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/Product.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  private cartService = inject(CartService);

  handleAddToCart() {
    this.cartService.addToCart(this.product);
  }
}
