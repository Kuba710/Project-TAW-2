import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

   public newBook = {
       title: '',
       year: '',
       image: '',
       description: ''
     };

     public logged?: boolean;
     public logout?: boolean;

     constructor(private dataService: DataService, private router: Router) {
     }


     ngOnInit(): void {
     }

     addBook() {
        this.dataService.createOrUpdate(this.newBook).subscribe((result) => {
          this.router.navigate(['/'])
        })
     }
}
