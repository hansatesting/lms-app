import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private httpClient:HttpClient) { }

  ngOnInit() {
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

postProfile(serialid:number,bookName: string,author: string,image: string,description: string){
  this.httpClient.post('http://localhost:8081/api/customers',
  {
    id: serialid,
    name: bookName,
    author:author,
    image: image,
    description: description
  }
  ).subscribe(
   (data: any[]) => {
       console.log(data);
   }
 )
}

// postProfile2(serialid:number,bookName: string,author: string,image: string,description: string){
//   console.log("serialid"+ serialid);
//   console.log("bookName"+ bookName);
//   console.log("author"+ author);
//   console.log("image"+ image);
//   console.log("description"+ description);
// }


}
