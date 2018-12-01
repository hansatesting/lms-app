import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  id : string;
  name: string;
  image: string;
  description : string;

  constructor() { }

  ngOnInit() {
  this.id=localStorage.getItem("id");
  console.log(this.id);
  this.name=localStorage.getItem("name");
  this.image=localStorage.getItem("image");
  this.description=localStorage.getItem("description");
  }

}
