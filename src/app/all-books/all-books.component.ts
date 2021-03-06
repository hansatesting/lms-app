import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const STORAGE_KEY = 'local_todolist';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})

export class AllBooksComponent implements OnInit {

  users = [];
  anotherTodolist = [];
  apiUrl = 'http://localhost:8080/api/books';
  
  GetData() {
    // this.http.get<any[]>(this.apiUrl)
    //   .subscribe(data => {
    //     this.users = data;
    //   });
  }

  ClearData() {
    this.users = [];
  }

  savedata(id: string, name: string, image: string, description: string, author: string){
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("image",image);
    localStorage.setItem("description",description);
    localStorage.setItem("author",author);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl)
    .subscribe(data => {
      this.users = data;
       console.log(this.users);
    });
  }

  open(){
    window.scrollTo(0, 0)
  }

}
