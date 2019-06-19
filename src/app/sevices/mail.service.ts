import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  
  HOME_URL='http://localhost:3001/';

  constructor(private http: HttpClient) { }

  sendMail(data) {
    debugger
    const url = this.HOME_URL + 'email/template';
    return this.http.post(url, data)

  }

  sendrequest(data) {
    debugger
    const url = this.HOME_URL + 'email/request';
    return this.http.post(url, data)

  }
  
}
