import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {

  }

  signIn(username, password) {

    let result = {
      Code : 1
    } as any;
    

    const networkStatus1 = ""
    const networkStatus2 = ""

    // // // console.log('Net stat 2 :' + networkStatus2);

    const body = {
      username: username,
      password: password
    };

   return this.http.post("http://localhost:3001/login", body, httpOptions);

    // this.http.post(url, body, httpOptions).subscribe((data: any) => {
    //   // console.log(data);
    //   if (data === false) {
    //     result = {
    //       Code : 1
    //     };
    //   } else {
    //     result = {
    //       Code : 0
    //     };
    //   }
    // }, error => {
    //   result = {
    //     Code : 1
    //   };
    // });

    // return result;
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}
