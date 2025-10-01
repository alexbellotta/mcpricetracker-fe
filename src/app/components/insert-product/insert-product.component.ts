import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.scss']
})
export class InsertProductComponent {
  @Input() showInserSection: boolean = false;
  @Output() product: EventEmitter<any> = new EventEmitter<any>();
  itemName: string = '';
  itemPrice: number | null = 0;

  add(){
    const product = {
      itemName: this.itemName,
      itemPrice: this.itemPrice
    }
    this.product.emit(product);
  }
}
