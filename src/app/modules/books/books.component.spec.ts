import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from './services/book.service';
import { of } from 'rxjs';
import { BOOKS } from 'src/mocks/books';

fdescribe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let bookService: any;
  const bookServiceSpy = jasmine.createSpyObj('BookService', ['getAll']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientTestingModule],
      declarations: [BooksComponent],
      providers: [
        MatDialog,
        { provide: MatDialogRef, useValue: {} },
        BookService,
      ],
    }).compileComponents();

    bookService = TestBed.inject(BookService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get books from server', () => {
    spyOn(bookService, 'getAll').and.returnValue(of(BOOKS));
    component.ngOnInit();
    expect(component.books).toBeTruthy();
    expect(component.books.length).toEqual(18);
  });

  it('should remove one book from server', () => {
    component.books = BOOKS;
    const spy = spyOn(bookService, 'delete').and.returnValue(of([]));
    component.removeBook(BOOKS[0]);
    expect(spy).toHaveBeenCalledWith(BOOKS[0]._id);
  });

  it('should get getBookByAuthor', () => {
    const spy = spyOn(component, 'getBookByAuthor').and.returnValue(undefined);
    component.getBookByAuthor();
    expect(spy).toHaveBeenCalledWith();
  });

  it('should add book', () => {
    pending();
  });

  it('should update the book', () => {
    pending();
  });
});
