import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-dvds',
  templateUrl: './all-dvds.component.html',
  styleUrls: ['./all-dvds.component.scss']
})
export class AllDvdsComponent implements OnInit {

  users = [];
  anotherTodolist = [];
  apiUrl = 'http://localhost:8080/api/books';

  ClearData() {
    this.users = [];
  }

  savedata(id: string, name: string, image: string, description: string, author: string){
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("image",image);
    localStorage.setItem("description",description);
    localStorage.setItem("author", author);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl)
    .subscribe(data => {
      this.users = data;
       console.log(this.users);
    });
  }

}
