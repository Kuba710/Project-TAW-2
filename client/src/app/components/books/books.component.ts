import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  @Input() filterText: string = '';
  public items$: any;

  constructor(private service: DataService) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
      this.service.getAll().subscribe(response => {
        this.items$ = response;
    });
   }

}
