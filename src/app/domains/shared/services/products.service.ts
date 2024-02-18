import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  private http = inject(HttpClient);
  getProducts() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
