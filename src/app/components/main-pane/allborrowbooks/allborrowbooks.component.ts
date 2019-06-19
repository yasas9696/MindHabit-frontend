import { UserService } from './../../../sevices/user.service';
import { User } from './../../../models/user';
import { MailService } from './../../../sevices/mail.service';
import { Book } from './../../../models/book';
import { RequestService } from './../../../sevices/request.service';
import { BookService } from './../../../sevices/book.service';
import { BorrowService } from './../../../sevices/borrow.service';
import { Component, OnInit } from '@angular/core';
import { Borrow } from 'src/app/models/borrow';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-allborrowbooks',
  templateUrl: './allborrowbooks.component.html',
  styleUrls: ['./allborrowbooks.component.css']
})
export class AllborrowbooksComponent implements OnInit {

  borrows : Borrow[] =[]
  updatedbook={} as Book 
  newreq ={} as reqbook

  constructor(private borrowservice:BorrowService,private toastr: ToastrService,private bookservice: BookService,private requestservice:RequestService , private mailservice:MailService ,private userservice:UserService) { }

  displayedColumns:string[] = ['Username','Book Name','borrowedDate','returnDate','fines','action'];
  
  dataSource = new MatTableDataSource(this.borrows);


  ngOnInit() {
    this.borrowservice.getBorrowBooks().subscribe((res:any)=>{
      this.borrows=res.result

      this.borrows.forEach(borrow => {
        let retDate = new Date(borrow.return_date)
        let dif= (new Date().getTime()-retDate.getTime())
        let diff=Math.ceil(dif/(1000*3600*24))

        if(diff>1){
          borrow.fines=(diff*5).toFixed(2)
        }
        console.log(diff)
      });




      this.dataSource.data=this.borrows
      console.log(res.result)
    })
  }
  refresh(){
    this.ngOnInit();
    this.dataSource._updateChangeSubscription()
  }

  removeBook(book){
    console.log(book)
    this.bookservice.getBookById(book.Book.id).subscribe((res:any)=>{
      
      if(res.code==0){
        console.log(res)
        
          this.updatedbook=res.result
          this.updatedbook.noOfBooks=this.updatedbook.noOfBooks+1
          this.bookservice.updateBook(this.updatedbook).subscribe((res2:any)=>{
            if(res2.code==0){
              this.borrowservice.deleteBook(book).subscribe((res3:any)=>{
                console.log(res3)
                if(res3.code==0){
                  this.toastr.success("successfuly removed")
        this.requestservice.getRequests(book.Book.id).subscribe((res4:any)=>{
          console.log(res4)
          res4.result.forEach(req => {
            console.log(req)
             console.log(req.bID)
             this.userservice.getUserbyId(req.uID).subscribe((res7:any)=>{
            this.newreq.bookname=book.Book.bname
            this.newreq.email = res7.result.email
            this.mailservice.sendrequest(this.newreq).subscribe(resp=>{
              console.log(resp)
            })
            this.requestservice.deleteRequest(req).subscribe(respp=>{
              console.log(respp)
            })
             })
           
            
          });
        })
                  this.ngOnInit()
                  
                }else {
                  this.toastr.error(res.message)
        
                }
            })
            }
            else{
    
            }
          })
        }
         
    
      
    })


  }

}

export class reqbook{
  email?: any
  bookname?: any

}









// export class AllbooksComponent implements OnInit {
//   books:Book[] = []
//     constructor(private bookservice:BookService) { }
//     displayedColumns: string[] = ['bookName', 'Author','category','action'];
//     dataSource = new MatTableDataSource(this.books);
//     ngOnInit() {
//       this.bookservice.getBooks().subscribe((res:any)=>{
  
//         this.books=res.result
//         this.dataSource.data=this.books
//         console.log(res.result)
//       })
//     }
//     applyFilter(filterValue: string) {
//       this.dataSource.filter = filterValue.trim().toLowerCase();
//     }
  
//   }