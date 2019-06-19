
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  HOME_URL='http://localhost:3001/';
  users: Observable<User[]>;

  constructor(private http: HttpClient) { }

  loginuser(user: User) {
    debugger
    const url = this.HOME_URL + 'login';
    return this.http.post(url, user)

  }}
