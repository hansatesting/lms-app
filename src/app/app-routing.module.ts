import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { AllLandingComponent } from './all-landing/all-landing.component';

const routes: Routes = [
  {
    path: 'all-books',
    component: AllBooksComponent,
  },
  {
    path: '',
    component: AllLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
