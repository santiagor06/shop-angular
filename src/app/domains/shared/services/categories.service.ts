import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}
  private http = inject(HttpClient);
  getCategories() {
    return this.http.get<Category[ ]>(
      'https://api.escuelajs.co/api/v1/categories'
    );
  }
}
