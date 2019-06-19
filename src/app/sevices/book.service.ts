import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  HOME_URL='http://localhost:3001/';
  books: Observable<Book[]>;
  book:Observable<Book>;

  constructor(private http: HttpClient) { }

  addBook(book: Book) {
    debugger
    const url = this.HOME_URL + 'books';
    return this.http.post(url, book)

  }

  getBooks(): Observable<Book[]> {
    this.books = this.http.get<Book[]>(this.HOME_URL + 'books');
    return this.books;

  }

  getBookById(id): Observable<Book> {
    this.book = this.http.get<Book>(this.HOME_URL + 'books/'+id);
    return this.book;

  }

  updateBook(book) {
    const url = this.HOME_URL + 'books/' + book.id;
    return this.http.put(url, book)
  }
  deleteBook(book) {
    const url = this.HOME_URL + 'books/' + book.id;
    return this.http.delete(url)
  }

}