import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BooksHomeComponent implements OnInit {

  public filterText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getName($event: string): void {
	this.filterText = $event;
  }
}

