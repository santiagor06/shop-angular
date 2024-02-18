import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  input,
} from '@angular/core';
import { Product } from '../../../shared/models/Product.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
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
