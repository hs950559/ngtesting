import { Injectable } from '@angular/core';
import { Book } from '../../../models/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://hkauthapi.herokuapp.com/books/';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(BASE_URL);
  }

  add(book: Book): Observable<Book> {
    return this.http.post<Book>(`${BASE_URL}`, book);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(`${BASE_URL}/${book._id}`, book);
  }

  delete(bookId) {
    return this.http.delete(BASE_URL + bookId);
  }
}
