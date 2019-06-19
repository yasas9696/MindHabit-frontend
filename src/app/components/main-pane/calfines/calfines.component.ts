import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calfines',
  templateUrl: './calfines.component.html',
  styleUrls: ['./calfines.component.css']
})
export class CalfinesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate([''])
  }

}
