import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: string = '';
  @Input({ required: true }) img: string = '';
  @Output() addToCart = new EventEmitter();
  handleAddToCart() {
    console.log('estoy en el hijo');
    this.addToCart.emit(this.title);
  }
}
