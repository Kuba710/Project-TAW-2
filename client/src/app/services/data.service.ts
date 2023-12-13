import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get(this.url + '/api/books');
  }

  getById(id: string) {
  	return this.http.get(this.url + '/api/books/' + id);
  }

  createOrUpdate(book: any) {
      return this.http.post(`${this.url}/api/books`, book);
  }

  deleteById(id: string) {
    return new Promise<boolean>((resolve, reject) => {
       this.http.delete(this.url + '/api/books/' + id).subscribe((response) => {
        if (response) {
         resolve(true);
        } else {
         resolve(false);
        }
       });
      });

  }

}
