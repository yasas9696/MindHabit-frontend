import { AllUsersComponent } from './components/main-pane/all-users/all-users.component';
import { AboutUsComponent } from './components/main-pane/about-us/about-us.component';
import { ContactUsComponent } from './components/main-pane/contact-us/contact-us.component';
import { BorrowBookComponent } from './components/main-pane/borrow-book/borrow-book.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AddBookComponent } from './components/main-pane/add-book/add-book.component';
import { AddAuthorComponent } from './components/main-pane/add-author/add-author.component';
import { UserProfileComponent } from './components/main-pane/user-profile/user-profile.component';
import { UserLoginComponent } from './components/main-pane/user-login/user-login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './components/main-pane/user-register/user-register.component';
import { CalfinesComponent } from './components/main-pane/calfines/calfines.component';
import { SlideShowComponent } from './components/main-pane/slide-show/slide-show.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { AuthGuard } from './auth.guard';
import { AllbooksComponent } from './components/main-pane/allbooks/allbooks.component';
import { NavBarComponent } from './components/main-pane/nav-bar/nav-bar.component';
import { SlShowComponent } from './components/main-pane/sl-show/sl-show.component';
import { UsertableComponent } from './components/main-pane/usertable/usertable.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { NewArrivalBookComponent } from './components/new-arrival/new-arrival-book/new-arrival-book.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'slideshow',
        component: SlideShowComponent,
      },
      {
        path: '',
        redirectTo: '/slideshow',
        pathMatch: 'full'
      },
      {
        path : 'add-book',
        component : AddBookComponent
      },
      {
        path: '',
        redirectTo: '/add-book',
        pathMatch: 'full'
      },
      {
        path: 'add-author',
        component: AddAuthorComponent,
      },
      {
        path: '',
        redirectTo: '/add-author',
        pathMatch: 'full'
      },
      {
        path: 'all-books',
        component: AllbooksComponent,
      },
      {
        path: '',
        redirectTo: '/all-books',
        pathMatch: 'full'
      },

      {
        path: 'all-users',
        component: AllUsersComponent,
      },
      {
        path: '',
        redirectTo: '/all-users',
        pathMatch: 'full'
      },


      {
        path: 'borrow-book',
        component: BorrowBookComponent,
      },
      {
        path: '',
        redirectTo: '/borrow-book',
        pathMatch: 'full'
      },


      {
        path: 'cal-fines',
        component: CalfinesComponent,
      },
      {
        path: '',
        redirectTo: '/cal-fines',
        pathMatch: 'full'
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: '',
        redirectTo: '/contact-us',
        pathMatch: 'full'
      },

      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: '',
        redirectTo: '/about-us',
        pathMatch: 'full'
      },


      {
        path: 'nav-bar',
        component: NavBarComponent,
      },
      {
        path: '',
        redirectTo: '/nav-bar',
        pathMatch: 'full'
      },

      
      
       
     
      {
        path: 'profile-user',
        component: UserProfileComponent,
      },
      {
        path: '',
        redirectTo: '/profile-user',
        pathMatch: 'full'
      },
      // {
      //   path: 'userregister',
      //   component: UserRegisterComponent,
      // },
      // {
      //   path: '',
      //   redirectTo: '/userregister',
      //   pathMatch: 'full'
      // },
       {
        path : 'user-table',
        component : UsertableComponent
      },
      {
        path: '',
        redirectTo: '/user-table',
        pathMatch: 'full'
      },
      {
        path : 'new-arrival',
        component : NewArrivalComponent
      },
      {
        path: '',
        redirectTo: '/new-arrival',
        pathMatch: 'full'
      },
      {
        path : 'newarrivalbook',
        component : NewArrivalBookComponent
      },
      {
        path: '',
        redirectTo: '/newarrivalbook',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'auth',
        component: UserLoginComponent,
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path : 'userregister',
        component : UserRegisterComponent,
      },
      {
        path: '',
        redirectTo: 'userregister',
        pathMatch: 'full'
      },
    ]
  },


// const routes: Routes = [

//    {
//     path:'',
//      component:SlideShowComponent
//    },
//    {
//      path:'register-user',
//      component:UserRegisterComponent
//    },
//    {
//     path : 'usertable',
//     component : UsertableComponent
//   },
//    {
//      path:'login-user',
//      component:UserLoginComponent
//    },

//    {
//      path:'profile-user',
//      component:UserProfileComponent
//    },
//    {
//      path:'add-author',
//      component:AddAuthorComponent
//     },
//     {
//       path:'add-book',
//       component:AddBookComponent
//     },
//     {
//       path:'cal-fines',
//       component:CalfinesComponent
//     },
//     {
//       path:'borrow-book',
//       component:BorrowBookComponent
//     },
//     {
//       path:'contact-us',
//       component:ContactUsComponent
//     },
//     {
//       path:'about-us',
//       component:AboutUsComponent
//     }

   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
}
