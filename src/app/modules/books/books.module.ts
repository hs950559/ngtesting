import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditBookDialogComponent } from './edit-book-dialog/edit-book-dialog.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BooksComponent, BookComponent, EditBookDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
  ],
  exports: [ReactiveFormsModule],
  providers: [],
  entryComponents: [EditBookDialogComponent],
})
export class BooksModule {}
