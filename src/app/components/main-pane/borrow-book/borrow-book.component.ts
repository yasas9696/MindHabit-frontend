import { BorrowService } from './../../../sevices/borrow.service';
import { Borrow } from 'src/app/models/borrow';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/sevices/user.service';
import { ToastrService, Toast } from 'ngx-toastr';
import { BookService } from 'src/app/sevices/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {
  users:User[]=[]
  books:Book[] = []
  borrow={} as Borrow
  updatedbook={} as Book 


  selectedStudent ={} as User
  selectedBook ={}as Book

  constructor(private router:Router ,private userservice:UserService, private toastr: ToastrService,private bookservice:BookService,private borrowservice:BorrowService) { }
 


  ngOnInit() {

    
    
    this.userservice.getUsers().subscribe((res:any)=>{
      this.users=res.result
      
      console.log(res.result)
    })

    this.bookservice.getBooks().subscribe((res:any)=>{

      this.books=res.result
      
      console.log(res.result)
    })
  }
  cancel(){
    this.router.navigate([''])
  }
  borrowBook(){


    this.borrow.borrowed_date= new Date()
    this.borrow.bID=this.selectedBook.id
    this.borrow.uID= this.selectedStudent.id


    console.log(this.borrow)

    if(this.borrow.uID==''){
      this.toastr.error("User name cannot be empty")
    }
    else if(this.borrow.bID==''){
      this.toastr.error("Book name cannot be empty")
    }
    else if(this.borrow.return_date==''){
      this.toastr.error("Return Date cannot be empty")
    }
    else{
this.borrowservice.getBorrowBookByUserId(this.borrow.uID).subscribe((res5:any)=>{
  console.log(res5)
  if(res5.code==0){
    if(res5.result==null){
      this.bookservice.getBookById(this.borrow.bID).subscribe((res:any)=>{
        if(res.code==0){
          console.log(res)
          if(res.result.noOfBooks>0){
            this.updatedbook=res.result
            this.updatedbook.noOfBooks=this.updatedbook.noOfBooks-1
            this.bookservice.updateBook(this.updatedbook).subscribe((res2:any)=>{
              if(res2.code==0){
                this.borrowservice.addBorrowBook(this.borrow).subscribe((res:any)=>{
                  console.log(res)
                  if(res.code==0){
                    this.toastr.success("successfuly added ")
          
                    this.ngOnInit()
                    
                  }else {
                    this.toastr.error(res.message)
          
                  }
              })
              }
              else{
      
              }
            })
          }else{
            this.toastr.error("no available books in this moment")
          }
      
        }
      })
      
    }else{
      this.toastr.error("This User already borrowed a book")
    }
  }})






  }

    // console.log(this.selectedStudent)
    // console.log(this.selectedBook)

  }

}
