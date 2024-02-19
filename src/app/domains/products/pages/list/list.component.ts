import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/Product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductsService } from '@shared/services/products.service';
import { CategoriesComponent } from '../../../product/components/categories/categories.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    CommonModule,
    HeaderComponent,
    CategoriesComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  private productServices = inject(ProductsService);
  @Input() categoryId?: string;
  products = signal<Product[]>([]);
  ngOnChanges() {
    console.log(this.categoryId);

    this.getProducts();
  }
  getProducts() {
    this.productServices.getProducts(this.categoryId).subscribe({
      next: (products: Product[]) => this.products.set(products),
      error: (error: Error) => console.log(error),
    });
  }
}
