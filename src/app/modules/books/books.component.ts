import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from 'src/app/models/book';
import { Observable, Subscription } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/default-dialog-config';
import { MatDialog } from '@angular/material/dialog';
import { EditBookDialogComponent } from './edit-book-dialog/edit-book-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  booksSubscription: Subscription;
  books: Book[];
  constructor(private dialog: MatDialog, private bookService: BookService) {}

  ngOnInit(): void {
    this.booksSubscription = this.bookService.getAll().subscribe((res) => {
      this.books = res;
    });
  }

  removeBook(book: Book) {
    this.bookService.delete(book._id).subscribe(() => {
      this.books = this.books.filter((item) => item._id !== book._id);
    });
  }

  editBook(book) {
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {
      dialogTitle: 'Edit Book',
      book,
      mode: 'update',
    };
    this.dialog
      .open(EditBookDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe((updatedBook) => {
        if (!updatedBook) {
          return;
        }
        this.books = this.books.map((item) => {
          if (item._id === updatedBook._id) {
            return updatedBook;
          }
          return item;
        });
      });
  }

  addBook() {
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {
      dialogTitle: 'Create Book',
      mode: 'create',
    };
    const dialogRef = this.dialog.open(EditBookDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((book) => {
      if (!book) {
        return;
      }
      this.books = [book, ...this.books];
    });
  }
}
