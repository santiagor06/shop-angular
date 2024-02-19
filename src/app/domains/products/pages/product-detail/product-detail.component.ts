import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/Product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent {
  @Input() id?: string;
  private productService = inject(ProductsService);
  private cartService = inject(CartService);
  cover = signal<string>('');
  product = signal<Product | null>(null);

  ngOnInit() {
    if (this.id) {
      this.productService.getOneProduct(this.id).subscribe({
        next: (product: Product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
        error: (err) => console.log(err),
      });
    }
  }
  setCover(img: string) {
    this.cover.set(img);
  }
  addToCart() {
    let product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
