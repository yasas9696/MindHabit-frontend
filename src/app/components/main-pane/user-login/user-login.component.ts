import { User } from './../../../models/user';
import { MainPaneComponent } from './../main-pane.component';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../../sevices/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AuthenticationService } from 'src/app/sevices/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username: any = ''
  password: any = ''
  constructor(private auth: AuthenticationService, private router: Router,
    private toastr: ToastrService,) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate([''])
  }

  signIn(){
    debugger
     if(this.username==''){
      console.log('Username cannot be empty')
      this.toastr.error( "Username cannot be empty")
    } 
    else if(this.password==''){
      console.log('password cannot be empty')
      this.toastr.error("password cannot be empty")
    }else{
      debugger
      const val = this.auth.signIn(this.username, this.password).subscribe((data: any) => {
      console.log(data.result)
        if (data.code==0) {
  
          if(data.result.length==0){
            console.log(data.result)
            this.toastr.warning('Please check your Username / Password and try again');
          }
          else {
            // console.log(val);
            this.toastr.success('Successfully loged in');
            localStorage.setItem('user',data.result[0].type);
            localStorage.setItem('userId',this.username)
            console.log(data.result[0])
            console.log(localStorage.userId)
  
            localStorage.setItem('token','abc')
            console.log(localStorage.token)
            this.router.navigate(['slideshow'])
    
            
            //localStorage.setItem('user', this.username);
            //this._router.navigate(['']);
          }
  
          }
          else{
            this.toastr.warning('network error');
          }
        
        
      });


    }
    
  }
  hello(){
    console.log('ajsadka')
    this.router.navigate(['userregister'])


  }

}
export class Login{
  username?:any 
  password?: any
}
