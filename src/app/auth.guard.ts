import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthenticationService } from './sevices/authentication.service';




@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['auth']);
      return false;
    } else {
      return true;
    }


    // return this.authService.currentUserObservable
    //   .take(1)
    //   .map(user => !!user)
    //   .do(loggedIn => {
    //     if (!loggedIn) {
    //       // // console.log('access denied');
    //       this.router.navigate(['/']);
    //     }
    //   });

  }
}