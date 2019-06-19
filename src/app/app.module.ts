import { AuthGuard } from './auth.guard';

import { AboutUsComponent } from './components/main-pane/about-us/about-us.component';

import { BorrowBookComponent } from './components/main-pane/borrow-book/borrow-book.component';

import { UserProfileComponent } from './components/main-pane/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPaneComponent } from './components/main-pane/main-pane.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule, MatTableModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatDividerModule, MatProgressSpinnerModule,MatDialogModule,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { UserRegisterComponent } from './components/main-pane/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/main-pane/user-login/user-login.component';
import { SlideShowComponent } from './components/main-pane/slide-show/slide-show.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { NewArrivalBookComponent } from './components/new-arrival/new-arrival-book/new-arrival-book.component';
import { NavBarComponent } from './components/main-pane/nav-bar/nav-bar.component';



import { CalfinesComponent } from './components/main-pane/calfines/calfines.component';
import { AddAuthorComponent } from './components/main-pane/add-author/add-author.component';
import { AddBookComponent } from './components/main-pane/add-book/add-book.component';
import { SlShowComponent } from './components/main-pane/sl-show/sl-show.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';


import { ContactUsComponent } from './components/main-pane/contact-us/contact-us.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsertableComponent } from './components/main-pane/usertable/usertable.component';
import { ToastrModule } from 'ngx-toastr';
import { AllbooksComponent } from './components/main-pane/allbooks/allbooks.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AllauthorsComponent } from './components/main-pane/allauthors/allauthors.component';
import { AllUsersComponent } from './components/main-pane/all-users/all-users.component';

import { AllborrowbooksComponent } from './components/main-pane/allborrowbooks/allborrowbooks.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './components/main-pane/update-author/update-author.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPaneComponent,
    NewArrivalComponent,
    FooterComponent,
    UserRegisterComponent,
    UserLoginComponent,
    SlideShowComponent,
    NewArrivalBookComponent,
    NavBarComponent,
    UserProfileComponent,
    CalfinesComponent,
    AddAuthorComponent,
    UserProfileComponent,
    AddBookComponent,
    SlShowComponent,
    BorrowBookComponent,
    SearchBarComponent,
    
    ContactUsComponent,
    AboutUsComponent,
    UsertableComponent,
    AllbooksComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    RegisterComponent,

    AllauthorsComponent,
    AllUsersComponent,
    UpdateBookComponent,
    AllborrowbooksComponent,
    UpdateAuthorComponent,

   

    
 
  ],

  

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,ReactiveFormsModule,
    SlideshowModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTableModule,  
    MatDividerModule,
    MatProgressSpinnerModule,

    SlideshowModule,  

    SlideshowModule,
    MatDatepickerModule,

    MatNativeDateModule,
    HttpClientModule,
ToastrModule.forRoot(),
    MatNativeDateModule
  ],

  entryComponents:[SlideShowComponent,UpdateBookComponent,UpdateAuthorComponent],
  exports:[SlideShowComponent],
  providers: [SlideShowComponent,NavBarComponent,AuthGuard,AddAuthorComponent,AllauthorsComponent,UpdateAuthorComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
