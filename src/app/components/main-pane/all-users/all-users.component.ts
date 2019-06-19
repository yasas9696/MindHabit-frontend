import { User } from './../../../models/user';
import { UserService } from './../../../sevices/user.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
users:User[]=[]
  constructor( private userservice:UserService, private toastr: ToastrService) { }
  displayedColumns: string[] = ['firstName','Email','type','NIC','action'];
  dataSource = new MatTableDataSource(this.users);


  ngOnInit() {
    this.userservice.getUsers().subscribe((res:any)=>{
      this.users=res.result
      this.dataSource.data=this.users
      console.log(res.result)
    })
  }
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  removeUser(user){
    if(confirm('are you sure to remove this user?')){
      this.userservice.deleteUser(user).subscribe((res:any)=>{
        if(res.code==1){
          this.toastr.error("delete failed")
        }
        else{
          this.toastr.success("deleted successfuly")
          this.users.splice(this.users.indexOf(user) , 1)
          this.dataSource._updateChangeSubscription()
        }
        
          console.log(res.result)
        })
      }
    }
   
    makeAdmin(user){
      if(confirm('are you sure to make this user as an admin?')){
        user.type = 'admin'
        this.userservice.updateUser(user).subscribe((res:any)=>{
          if(res.code==1){
            this.toastr.error("failed to make admin")
          }
          else{
            this.toastr.success("make admin successfuly")
          }
         })
      }
     
    }
    refresh(){
      this.ngOnInit();
      this.dataSource._updateChangeSubscription()
    }

}








//   ngOnInit() {
//     this.bookservice.getBooks().subscribe((res:any)=>{

//       this.books=res.result
//       this.dataSource.data=this.books
//       console.log(res.result)
//     })
//   }
//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }

// }