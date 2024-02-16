import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/Product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor() {
    let initialData: Product[] = [
      {
        id: Date.now(),
        title: 'Pord 1',
        createdAt: Date.now().toString(),
        price: 200,
        imag: 'https://picsum.photos/640/640?r=27',
      },
      {
        id: Date.now(),
        title: 'Pord 2',
        createdAt: Date.now().toString(),
        price: 300,
        imag: 'https://picsum.photos/640/640?r=29',
      },
      {
        id: Date.now(),
        title: 'Pord 3',
        createdAt: Date.now().toString(),
        price: 300,
        imag: 'https://picsum.photos/640/640?r=22',
      },
      {
        id: Date.now(),
        title: 'Pord 5',
        createdAt: Date.now().toString(),
        price: 400,
        imag: 'https://picsum.photos/640/640?r=29',
      },
      {
        id: Date.now(),
        title: 'Pord 1',
        createdAt: Date.now().toString(),
        price: 200,
        imag: 'https://picsum.photos/640/640?r=27',
      },
      {
        id: Date.now(),
        title: 'Pord 2',
        createdAt: Date.now().toString(),
        price: 300,
        imag: 'https://picsum.photos/640/640?r=29',
      },
      {
        id: Date.now(),
        title: 'Pord 3',
        createdAt: Date.now().toString(),
        price: 300,
        imag: 'https://picsum.photos/640/640?r=22',
      },
      {
        id: Date.now(),
        title: 'Pord 5',
        createdAt: Date.now().toString(),
        price: 400,
        imag: 'https://picsum.photos/640/640?r=29',
      },
    ];
    this.products.set(initialData);
  }
  products = signal<Product[]>([]);
}
