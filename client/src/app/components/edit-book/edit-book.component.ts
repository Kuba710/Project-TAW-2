import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

   public newEditedBook = {
       id: '',
       title: '',
       year: '',
       image: '',
       description: ''
     };

     public logged?: boolean;
     public logout?: boolean;

     constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
     }


     ngOnInit(): void {
        let id: string = '';
        this.route.paramMap.subscribe((params: any) => {
            id = params.get('id');
        });
        this.dataService.getById(id).subscribe((res: any) => {
            this.newEditedBook.id = res['id'];
            this.newEditedBook.title = res['title'];
            this.newEditedBook.year = res['year'];
            this.newEditedBook.image = res['image'];
            this.newEditedBook.description = res['description'];
        });
     }

     editBook() {
        this.dataService.createOrUpdate(this.newEditedBook).subscribe((result) => {
          this.router.navigate(['/'])
        })
     }
}
