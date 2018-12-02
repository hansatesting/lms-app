import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-barrow-item',
  templateUrl: './barrow-item.component.html',
  styleUrls: ['./barrow-item.component.scss']
})
export class BarrowItemComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  id : string;
  name: string;
  description : string;
  author : string;

  constructor(private formBuilder: FormBuilder,private httpClient:HttpClient) { }

  ngOnInit() {

    this.id=localStorage.getItem("id");
    this.name=localStorage.getItem("name");
    this.author=localStorage.getItem("author");

    this.registerForm = this.formBuilder.group({
      serialid: ['', Validators.required],
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!!\n\n')
    // console.log(JSON.stringify(this.registerForm.value))    
    //+ JSON.stringify(this.registerForm.value)
}

postProfile(serialid: string,bookName: string,author: string,numberofdates:string){
  alert('SUCCESS!!\n\n')
  this.httpClient.post('http://localhost:8080/api/barrow',
  {
   
    memberid: serialid,
    nameofbook:bookName,
    authorofbook: author,
    numberofdates: numberofdates
  }
  ).subscribe(
   (data: any[]) => {
       console.log(data);
   }
 )
}

}
