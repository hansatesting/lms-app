import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { AllLandingComponent } from './all-landing/all-landing.component';
import { SingleBookComponent} from './single-book/single-book.component';
import { AddBookComponent} from './add-book/add-book.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'all-books',
    component: AllBooksComponent,
  },
  {
    path: '',
    component: AllLandingComponent,
  },
  {
    path: 'single-book',
    component: SingleBookComponent,
  },
  {
    path: 'add-book',
    component: AddBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
