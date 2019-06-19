
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Author } from '../models/author';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  HOME_URL='http://localhost:3001/';
  author: Observable<Author[]>;

  constructor(private http: HttpClient) { }

  addAuthor(author) {
    debugger
    const url = this.HOME_URL + 'authors';
    return this.http.post(url, author)

  }

  getUsers(): Observable<Author[]> {
    this.author = this.http.get<Author[]>(this.HOME_URL + 'authors');
    return this.author;

  }

  updateUser(author) {
    const url = this.HOME_URL + 'authors/' + author.id;
    return this.http.put(url, author)
  }
  deleteUser(author) {
    const url = this.HOME_URL + 'authors/' + author.id;
    return this.http.delete(url)
  }
}