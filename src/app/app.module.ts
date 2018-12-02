import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { AllLandingComponent } from './all-landing/all-landing.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleBookComponent } from './single-book/single-book.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllDvdsComponent } from './all-dvds/all-dvds.component';
import { SingleDvdComponent } from './single-dvd/single-dvd.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { BarrowItemComponent } from './barrow-item/barrow-item.component';
import { ReportGenComponent } from './report-gen/report-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    AllLandingComponent,
    SingleBookComponent,
    AddBookComponent,
    AllDvdsComponent,
    SingleDvdComponent,
    DeleteBookComponent,
    BarrowItemComponent,
    ReportGenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
