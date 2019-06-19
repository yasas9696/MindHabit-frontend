import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/sevices/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  constructor(private auth: AuthenticationService, private _router: Router,private router:Router,
    private toastr: ToastrService,) { }

  ngOnInit() {

  }

  signIn() {
     debugger
    const val = this.auth.signIn(this.username, this.password).subscribe((data: any) => {
    console.log(data.result)
      if (data.code==0) {

        if(data.result.length==0){
          this.toastr.warning('Please check your Username / Password and try again');
        } else {
          // console.log(val);
          this.toastr.success('Successfully loged in');
          localStorage.setItem('token','abc')
          console.log(localStorage.token)
          this._router.navigate([''])
  
          
          //localStorage.setItem('user', this.username);
          //this._router.navigate(['']);
        }

        }
        else{
          this.toastr.warning('network error');
        }
      
      
    });
    // // console.log(val);

  }
  hello(){
    console.log('ajsadka')
    this.router.navigate(['userregister'])


  }


}
