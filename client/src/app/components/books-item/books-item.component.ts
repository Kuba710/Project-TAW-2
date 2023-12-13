import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {

  @Input() image?: string;
  @Input() title?: string;
  @Input() id?: number;

  ngOnInit() {
    }
}
