import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { UserService } from 'src/app/sevices/user.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  comfirmpassword :String=''

  emailex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  user:User={
    
    fname:'',
    lname: '',
    username:'',
    password: '',
    email: '',
    address: '',
    phone: '',
    regdate:'',
    nic: '',
  }
  constructor(private router:Router , private userService:UserService, private toastr: ToastrService,) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate([''])
  }
  async addUser(){
    debugger
    console.log(this.user)
    if(this.user.fname==''){
      console.log('first name cannot be empty')
      this.toastr.error("first name cannot be empty")
    }
    else if (this.user.lname==''){
      console.log('last name cannot be empty')
      this.toastr.error("Last name cannot be empty")
    }
    else if(this.user.username==''){
      console.log('username cannot be empty')
      this.toastr.error("Username cannot be empty")
    }
    else if(this.user.email==''){
      console.log('email cannot be empty')
      this.toastr.error("E-mail cannot be empty")
    }
    else if(!this.emailex.test(this.user.email)){
      console.log('email cannot be empty')
      this.toastr.error("Enter a valid E-mail")
    }
    else if(this.user.nic==''){
      console.log('nic cannot be empty')
      this.toastr.error("NIC cannot be empty")
    }
    
    else if(this.user.password==''){
      console.log('You must enter a password to proceed')
      this.toastr.error("Password cannot be empty")
    }
    else if(this.user.phone==''){
      console.log('phone number cannot be empty')
      this.toastr.error("Phone number cannot be empty")
    }
    else if(this.user.address==''){
      console.log('Address cannot be empty')
      this.toastr.error("Address cannot be empty")
    }
    else if(this.user.password!=this.comfirmpassword){
      console.log('Address cannot be empty')
      this.toastr.error("password did not match")
    }
    else{
      this.userService.addUser(this.user).subscribe((res:any)=>{
        if(res.code==0){
          this.toastr.success("User register successfuly")

        }
        else{
          this.toastr.error(res.message)

        }
      });
     
    }



    ///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    



  }

}



