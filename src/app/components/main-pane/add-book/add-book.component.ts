import { AuthorService } from './../../../sevices/author.service';
import { Author } from 'src/app/models/author';

import { Book } from './../../../models/book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/sevices/book.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book:Book={
    bname:'',
    author:'',
    noOfBooks:'',
    category:'',
    bookcode:'',
    price:'',
  }
  authors:Author[] = []
  selectedAuthor={} as Author

  constructor(private router:Router , private bookService:BookService,private toastr: ToastrService, private autherservice: AuthorService ) { }

  ngOnInit() {
    this.book={
      bname:'',
      author:'',
      noOfBooks:'',
      category:'',
      bookcode:'',
      price:'',
    }
    this.autherservice.getUsers().subscribe((res:any)=>{
      if(res.code==0){
        this.authors=res.result
    }
    

    })
  }

  cancel(){
    this.router.navigate([''])
  }
  addBook(){
    console.log(this.book)
    if(this.book.bname==''){
      console.log('book name cannot be empty')
      this.toastr.error("Book name cannot be empty")
    }
    else if(this.selectedAuthor==''){
      console.log('book name cannot be empty')
      this.toastr.error("Author name cannot be empty")

    }
    else if(this.book.noOfBooks==''){
      console.log('book name cannot be empty')
      this.toastr.error("No Of Books cannot be empty")

    }
    else if(this.book.price==''){
      console.log('book name cannot be empty')
      this.toastr.error("price cannot be empty")

    }
    else{
      this.bookService.addBook(this.book).subscribe((res:any)=>{
        console.log(res)
        if(res.code==0){
          this.toastr.success("Book added successfuly")

          this.ngOnInit()
          
        }else {
          this.toastr.error(res.message)

        }
      }
        
        );
      
    }


    
  }
 

}
