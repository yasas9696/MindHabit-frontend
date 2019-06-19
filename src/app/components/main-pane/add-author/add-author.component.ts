import { AllauthorsComponent } from './../allauthors/allauthors.component';
import { Author } from './../../../models/author';
import { AuthorService } from './../../../sevices/author.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  author:Author={
    fname:'',
    lname:'',
    authorCode:'',
   
  }

  constructor(private router:Router,private authorService:AuthorService,private toastr: ToastrService) { }

  ngOnInit() {
    this.author={
      fname:'',
      lname:'',
      authorCode:'',
     
    }
  }
  cancel(){
    this.router.navigate([''])
  }
  addAuthor(){
    debugger
    console.log(this.author)
    if(this.author.fname==''){
      console.log('bfirst name cannot be empty')
      this.toastr.error("First name cannot be empty")
    }
    else if(this.author.lname==''){
      console.log('book name cannot be empty')
      this.toastr.error("last name cannot be empty")

    }
    else if(this.author.authorCode==''){
      console.log('book name cannot be empty')
      this.toastr.error("Athor code cannot be empty")

    }
    
    else{
      debugger
      this.authorService.addAuthor(this.author).subscribe((res:any)=>{
        if(res.code==0){

          this.toastr.success("Author added successfuly")
          
          this.ngOnInit()
        }
        else{
          
      this.toastr.error("failed")
        }
      });
    }


    
  }

}
