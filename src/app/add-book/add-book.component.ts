import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  registerFormD: FormGroup;
  submittedD = false;

  constructor(private formBuilder: FormBuilder,private httpClient:HttpClient) { }

  ngOnInit() {
    this.registerFormD = this.formBuilder.group({
      serialid: ['', Validators.required],
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]]
  });
  }

  get f() { return this.registerFormD.controls; }

  onSubmit() {
    this.submittedD = true;

    // stop here if form is invalid
    if (this.registerFormD.invalid) {
        return;
    }

    alert('SUCCESS!!\n\n')
    // console.log(JSON.stringify(this.registerForm.value))    
    //+ JSON.stringify(this.registerForm.value)
}

postProfile(serialid:number,bookName: string,author: string,image: string,description: string){
  this.httpClient.post('http://localhost:8080/api/books',
  {
   
    title: bookName,
    author:author,
    image: image,
    content: description
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
