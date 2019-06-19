import { BookRequest } from './../models/request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  HOME_URL='http://localhost:3001/';
  requests: Observable<BookRequest[]>;
  constructor(private http: HttpClient) { }


  addRequest(request: BookRequest) {
    debugger
    const url = this.HOME_URL + 'requests';
    return this.http.post(url, request)

  }

  getRequests(id): Observable<BookRequest[]> {
    this.requests = this.http.get<BookRequest[]>(this.HOME_URL + 'requests/'+id);
    return this.requests;

  }

  
  deleteRequest(request) {
    console.log(request)
    const url = this.HOME_URL + 'requests/' + request.id;
    return this.http.delete(url)
  }

}

