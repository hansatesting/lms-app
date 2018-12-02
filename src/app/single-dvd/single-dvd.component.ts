import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-dvd',
  templateUrl: './single-dvd.component.html',
  styleUrls: ['./single-dvd.component.scss']
})
export class SingleDvdComponent implements OnInit {

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
