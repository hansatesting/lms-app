import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

  users = [];
  anotherTodolist = [];
  apiUrl = 'http://localhost:8080/api/books';
  deleteuri = 'http://localhost:8080/api/books/';

  GetData() {
    // this.http.get<any[]>(this.apiUrl)
    //   .subscribe(data => {
    //     this.users = data;
    //   });
  }

  ClearData() {
    this.users = [];
  }

  savedata(id: string, name: string, image: string, description: string){
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("image",image);
    localStorage.setItem("description",description);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl)
    .subscribe(data => {
      this.users = data;
       console.log(this.users);
    });
  }

  deletedata(id: number){
    console.log(""+id);
    this.deleteuri = 'http://localhost:8080/api/books/'+id;
    console.log(this.deleteuri);
    this.http.delete<any[]>(this.deleteuri)
    .subscribe(data => {
      this.users = data;
       console.log(this.users);
    });
    
  }

}
