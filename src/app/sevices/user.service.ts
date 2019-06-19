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
export class UserService {

  HOME_URL='http://localhost:3001/';
  users: Observable<User[]>;

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    debugger
    const url = this.HOME_URL + 'users';
    return this.http.post(url, user)

  }

  getUsers(): Observable<User[]> {
    this.users = this.http.get<User[]>(this.HOME_URL + 'users');
    return this.users;

  }

  getUserbyUsername(obj): Observable<User[]> {
    this.users = this.http.post<User[]>(this.HOME_URL + 'users/uname',obj);
    return this.users;

  }

  getUserbyId(id): Observable<User> {
    return this.http.get(this.HOME_URL + 'users/'+id);
    

  }

  updateUser(user) {
    const url = this.HOME_URL + 'users/' +user.id;
    return this.http.put(url, user)
  }
  deleteUser(user) {
    const url = this.HOME_URL + 'users/' + user.id;
    return this.http.delete(url)
  }
}