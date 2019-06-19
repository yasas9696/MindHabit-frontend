import { BookService } from 'src/app/sevices/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;


  constructor(private router:Router,private bookservice:BookService) { }
  logedin=false
  action = 'Login'
  actionType = 1
  ngOnInit() {

this.bookservice.getBooks().subscribe((res:any)=>{
res.result.forEach(book => {
  this.options.push(book.bname)
});
})

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    if(localStorage.getItem('token')){
      this.action = 'LogOut'
      this.actionType = 2
      this.logedin=true
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  registerUser(){
this.router.navigate(['userregister'])
  }
  loginUser(){
    if(this.actionType == 2){
      localStorage.clear()
      this.router.navigate(['auth'])
    }
    else{
      this.router.navigate([''])

    }
    
  }
}
