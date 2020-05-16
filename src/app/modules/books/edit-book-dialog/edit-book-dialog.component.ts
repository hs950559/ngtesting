import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from '../services/book.service';
import { Book } from 'src/app/models/book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.scss'],
})
export class EditBookDialogComponent implements OnInit {
  bookForm: FormGroup;

  dialogTitle: string;

  book: Book;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private bookService: BookService
  ) {
    this.book = data.book;
    this.mode = data.mode;
  }

  ngOnInit() {
    this.dialogTitle = this.mode === 'create' ? 'Add Book' : 'Update Book';

    const formControls = {
      name: ['', Validators.required],
      author: [''],
      price: [''],
      publishedDate: [new Date()],
    };

    if (this.mode === 'update') {
      this.bookForm = this.fb.group(formControls);
      this.bookForm.patchValue({ ...this.book });
    } else if (this.mode === 'create') {
      this.bookForm = this.fb.group({
        ...formControls,
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const book: Book = {
      ...this.book,
      ...this.bookForm.value,
    };

    if (this.mode === 'update') {
      this.bookService.update(book).subscribe((updatedBook) => {
        this.dialogRef.close(updatedBook);
      });
    } else if (this.mode === 'create') {
      this.bookService.add(book).subscribe((newBook) => {
        this.dialogRef.close(newBook);
      });
    }
  }
}
