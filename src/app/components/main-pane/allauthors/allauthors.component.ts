import { AuthorService } from './../../../sevices/author.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Author } from 'src/app/models/author';
import { ToastrService } from 'ngx-toastr';
import { UpdateAuthorComponent } from '../update-author/update-author.component';

@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
  styleUrls: ['./allauthors.component.css']
})
export class AllauthorsComponent implements OnInit {
  author:Author[] = []
  constructor(private authorservice:AuthorService  , public dialog:MatDialog,private toastr: ToastrService) { }
  displayedColumns: string[] = ['firstname','lastname', 'aucode','action'];
  dataSource = new MatTableDataSource(this.author);
  ngOnInit() {
    this.authorservice.getUsers().subscribe((res:any)=>{

      this.author=res.result
      this.dataSource.data=this.author
      console.log(res.result)
  })
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  upateAuthor(author){
    const ref = this.dialog.open(UpdateAuthorComponent,{width:'500px',data:author})
  }

  removeAuthor(author){
    if(confirm('Are You sure to remove this Author?')){
      this.authorservice.deleteUser(author).subscribe((res:any)=>{
        if(res.code==1){
          this.toastr.error("Deletion Failed")
        }
        else{
          this.toastr.success("Deletion Successfull")
          this.author.splice(this.author.indexOf(author) , 1)
          this.dataSource._updateChangeSubscription()
        }
        
          console.log(res.result)
        })
      }
    
  }

  refresh(){
    this.ngOnInit();
    this.dataSource._updateChangeSubscription()
  }
  
}
