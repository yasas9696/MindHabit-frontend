import { AuthorService } from './../../../sevices/author.service';
import { Author } from './../../../models/author';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
author:Author={
  fname:'',
  lname:'',
  authorCode:'',
}

  constructor( private router:Router , private authorservice: AuthorService ,private toastr: ToastrService ,public dialogref:MatDialogRef<UpdateAuthorComponent>, @Inject(MAT_DIALOG_DATA) private data:Author) { }

  ngOnInit() {

    this.author=this.data
  }
update(){
  this.authorservice.updateUser(this.author).subscribe((res:any)=>{
    if(res.code==1){
      this.toastr.error("update failed")
      this.dialogref.close()
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


