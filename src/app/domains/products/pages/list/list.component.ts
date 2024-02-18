import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/Product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  private productServices = inject(ProductsService);
  products = signal<Product[]>([]);
  ngOnInit() {
    this.productServices.getProducts().subscribe({
      next: (products: Product[]) => this.products.set(products),
      error: (error: Error) => console.log(error),
    });
  }
}
