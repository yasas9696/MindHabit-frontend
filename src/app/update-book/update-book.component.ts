import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { BookService } from '../sevices/book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book:Book={
    bname:'',
    author:'',
    noOfBooks:'',
    category:'',
    bookcode:'',
    price:'',
  }

  constructor(private router:Router , private bookService:BookService,private toastr: ToastrService ,public dialogref:MatDialogRef<UpdateBookComponent>, @Inject(MAT_DIALOG_DATA) private data:Book) { }

  ngOnInit() {

    this.book=this.data
  }
  update(){
    this.bookService.updateBook(this.book).subscribe((res:any)=>{
      if(res.code==1){
        this.toastr.error("update failed")
      }
      else{
        this.toastr.success("update successfuly")
        this.dialogref.close()
      }
     })
  }

  cancel(){
    this.dialogref.close()
  }

}
