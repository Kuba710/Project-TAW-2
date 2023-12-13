import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'books-item-image',
  templateUrl: './books-item-image.component.html',
  styleUrls: ['./books-item-image.component.css']
})
export class BooksItemImageComponent implements OnInit {

  @Input() image?: string;

  constructor() { }

    ngOnInit(): void {
    }
}
