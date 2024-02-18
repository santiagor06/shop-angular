import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cart = signal<Product[]>([]);
  total = computed(() => {
    let cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });
  isCartOpen = signal<boolean>(false);
  handleOpenCart() {
    this.isCartOpen.update((state) => !state);
  }
  addToCart(product: Product) {
    this.cart.update((state) => [...state, product]);
  }
}
