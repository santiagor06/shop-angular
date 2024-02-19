import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Category } from '@shared/models/Product.model';
import { CategoriesService } from '@shared/services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  private categoriesService = inject(CategoriesService);
  categories = signal<Category[] | null>(null);
  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (categories: Category[]) => this.categories.set(categories),
      error: (err) => console.log(err),
    });
  }
}
