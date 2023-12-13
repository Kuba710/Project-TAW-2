import { Component, Input } from '@angular/core';

@Component({
  selector: 'books-item-title',
  templateUrl: './books-item-title.component.html',
  styleUrls: ['./books-item-title.component.css']
})
export class BooksItemTitleComponent {
  @Input() title?: string;
  @Input() id?: number;
}
