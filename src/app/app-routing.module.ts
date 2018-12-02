import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { AllLandingComponent } from './all-landing/all-landing.component';
import { SingleBookComponent} from './single-book/single-book.component';
import { AddBookComponent} from './add-book/add-book.component';
import { from } from 'rxjs';
import { AllDvdsComponent } from './all-dvds/all-dvds.component';
import { SingleDvdComponent } from './single-dvd/single-dvd.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { BarrowItemComponent } from './barrow-item/barrow-item.component';
import { ReportGenComponent } from './report-gen/report-gen.component';

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
  {
    path: 'all-dvds',
    component: AllDvdsComponent,
  },
  {
    path: 'single-dvd',
    component: SingleDvdComponent,
  },
  {
    path: 'delete-book',
    component: DeleteBookComponent,
  },
  {
    path: 'barrow-item',
    component: BarrowItemComponent,
  },
  {
    path: 'report-gen',
    component: ReportGenComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
