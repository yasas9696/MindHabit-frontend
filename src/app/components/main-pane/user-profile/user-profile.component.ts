import { BookService } from './../../../sevices/book.service';
import { BorrowService } from './../../../sevices/borrow.service';
import { ToastrService, ToastRef } from 'ngx-toastr';
import { User } from './../../../models/user';
import { UserService } from 'src/app/sevices/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { Toast } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private router:Router ,private userService:UserService , private toastr: ToastrService, private borrowservice:BorrowService, private bookservice:BookService ) { }
obj={
  username:''
}

currentBorrowBook =''
fine=''
  user= {} as User
  ngOnInit() {
this.obj.username=localStorage.userId
    this.userService.getUserbyUsername(this.obj).subscribe((res:any)=>{
     this.user=res.result[0]
      

      this.borrowservice.getBorrowBookByUserId(this.user.id).subscribe((res5:any)=>{
        console.log(res5)
        if(res5.code==0){
          if(res5.result!=null){
           this.bookservice.getBookById(res5.result.bID).subscribe((res6:any)=>{
            console.log(res6)
          this.currentBorrowBook=res6.result.bname
          

          let retDate = new Date(res5.result.return_date)
        let dif= (new Date().getTime()-retDate.getTime())
        let diff=Math.ceil(dif/(1000*3600*24))

        if(diff>1){
          this.fine=(diff*5).toFixed(2)
        }
          })

          }
        }

      })
    })


  }
  cancel(){
    this.router.navigate([''])
  }
  updateUser(){
    this.userService.updateUser(this.user).subscribe((res:any)=>{
      if(res.code==1){
        this.toastr.error("update failed")
      }
      else{
        this.toastr.success("update successfuly")
      }
     })
  }

}
