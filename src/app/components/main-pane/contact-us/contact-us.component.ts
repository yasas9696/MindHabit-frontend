import { email } from './../../../models/email';
import { MailService } from './../../../sevices/mail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
email:email={
  email:'',
  message:'',
}
  constructor(private mailservice:MailService,private toastr: ToastrService ) { }

  ngOnInit() {
    this.email={
      email:'',
      message:'',
    }
  }

  sendmail(){
    console.log(this.email)
    this.mailservice.sendMail(this.email).subscribe(res=>{
      console.log(res)
      this.toastr.success("Email successfuly sent")
      this.ngOnInit()
    })
  }

}
