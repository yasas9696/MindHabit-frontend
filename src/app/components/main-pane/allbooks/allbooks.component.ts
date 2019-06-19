import { BookRequest } from './../../../models/request';
import { UserService } from 'src/app/sevices/user.service';
import { BookService } from './../../../sevices/book.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Book } from 'src/app/models/book';
import { UpdateBookComponent } from 'src/app/update-book/update-book.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RequestService } from 'src/app/sevices/request.service';


@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  islogedin:boolean= true
 
  isadmin = true

books:Book[] = []
requests={} as BookRequest
  constructor(private bookservice:BookService , public dialog:MatDialog,private toastr: ToastrService,private router:Router,private userService:UserService,private requestservice:RequestService) { }
  displayedColumns: string[] = ['bookName', 'Author','category','Qty','action'];
  dataSource = new MatTableDataSource(this.books);

obj={
  username:''
}


  user= {} as User
  ngOnInit() {
this.obj.username=localStorage.userId
    this.userService.getUserbyUsername(this.obj).subscribe((res:any)=>{
     this.user=res.result[0]
      console.log(this.user)
    })
  




    if(localStorage.user != 'admin'){
      this.isadmin= false
    }
    this.bookservice.getBooks().subscribe((res:any)=>{

      this.books=res.result
      this.dataSource.data=this.books
      console.log(res.result)
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  upatebook(book){
    const ref = this.dialog.open(UpdateBookComponent,{width:'500px',data:book})
  }

  removeBook(book){
    if(confirm('Are You sure to remove this Book?')){
      this.bookservice.deleteBook(book).subscribe((res:any)=>{
        if(res.code==1){
          this.toastr.error("Deletion Failed")
        }
        else{
          this.toastr.success("Deletion Successfull")
          this.books.splice(this.books.indexOf(book) , 1)
          this.dataSource._updateChangeSubscription()
        }
        
          console.log(res.result)
        })
      }
    
  }

  reqest(book){

   




    this.bookservice.getBookById(book.id).subscribe((res:any)=>{
      if(res.code==0){
        console.log(res)
        if(res.result.noOfBooks>0){

          this.toastr.success("Book is Available.. Please visit the library and take your book")
         
        }else{
          this.requests.bID=book.id
          this.requests.uID=this.user.id
          this.requestservice.addRequest(this.requests).subscribe((res:any)=>{
            console.log(res)
          })
          this.toastr.info("Book is not available.. we will notify you by the email when the book is available")
        }
    
      }
    })



  }
  refresh(){
    this.ngOnInit();
    this.dataSource._updateChangeSubscription()
  }
}
