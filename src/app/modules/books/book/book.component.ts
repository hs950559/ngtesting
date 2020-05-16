import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book$: Observable<Book>;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('bookId');
    console.log(bookId, 'HERRE');
    this.book$ = this.bookService
      .getAll()
      .pipe(map((books) => books.find((book) => book._id === bookId)));
  }
}
