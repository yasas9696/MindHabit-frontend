import { Borrow } from './../models/borrow';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  HOME_URL='http://localhost:3001/';
  borrows: Observable<Borrow[]>;
  constructor(private http: HttpClient) { }

  addBorrowBook(borrow: Borrow) {
    debugger
    const url = this.HOME_URL + 'borrows';
    return this.http.post(url, borrow)

  }

  getBorrowBooks(): Observable<Borrow[]> {
    this.borrows = this.http.get<Borrow[]>(this.HOME_URL + 'borrows/');
    return this.borrows;

  }

  
  deleteBook(borrow) {
    console.log(borrow)
    const url = this.HOME_URL + 'borrows/' + borrow.id;
    return this.http.delete(url)
  }
  getBorrowBookByUserId(id){
    return  this.http.get<Borrow>(this.HOME_URL + 'borrows/'+id);
 
  }

}
