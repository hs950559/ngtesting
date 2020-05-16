import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: ':bookId',
    component: BookComponent,
    // resolve: {
    //   courses: BooksresolverService,
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
