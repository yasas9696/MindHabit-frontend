import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  

  imageSources = new Array()

  constructor() { }

  ngOnInit() {
    
  this.imageSources=["assets/books_banner_01.jpg","assets/book_banner_02.jpg","assets/pray_01.jpg","assets/rylee.jpg","assets/kidimg01.jpg","assets/seven.jpg","assets/kidimg02.jpg","assets/novel01.jpg","assets/novel02.jpg","assets/novel03.jpg"]
  }

}
