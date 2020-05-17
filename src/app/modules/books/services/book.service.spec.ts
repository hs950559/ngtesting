import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BookService } from './book.service';
import { BOOKS } from 'src/mocks/books';
import { HttpErrorResponse } from '@angular/common/http';

describe('BookService', () => {
  let service: BookService;
  let testingController: HttpTestingController;
  const url = 'https://hkauthapi.herokuapp.com/books/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BookService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all books - GET /books', () => {
    service.getAll().subscribe((books) => {
      expect(books.length).toBe(18);

      const book: any = books[1];
      expect(book.title).toEqual('JAVA 2');
      expect(book.author).toEqual('Hemant');
    });

    const req = testingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(BOOKS);
  });

  it('should get one book - GET /books/12', () => {
    service.getOne('5e931e3c5bfcd70004f6949c').subscribe((book) => {
      expect(book).toBeDefined();
      expect(book.name).toEqual('tiktok');
    });

    const req = testingController.expectOne(`${url}5e931e3c5bfcd70004f6949c`);
    expect(req.request.method).toEqual('GET');
    req.flush(BOOKS[3]);
  });

  it('should add one book - POST /books', () => {
    const book: any = {
      name: 'J2EE Book',
      author: 'Surya',
    };

    service.add(book).subscribe((newBook) => {
      expect(newBook._id).toBeDefined();
      expect(newBook._id).toEqual('dsdsdsGD213213hvbcb');
      expect(newBook.author).toEqual(book.author);
    });

    const req = testingController.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush({
      ...book,
      _id: 'dsdsdsGD213213hvbcb',
    });
  });

  it('should update one book - PUT /books/12', () => {
    const changes: Partial<any> = {
      _id: '5c41ae557757b00770d032ac',
      author: 'Your Dady',
    };

    service.update(changes).subscribe((book) => {
      expect(book._id).toEqual('5c41ae557757b00770d032ac');
      expect(book.author).toEqual('Your Dady');
    });

    const req = testingController.expectOne(`${url}${changes._id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush({
      ...BOOKS[0],
      ...changes,
    });
  });

  it('should remove one book - DELETE /books/12', () => {
    const bookId = '5c41ae557757b00770d032ac';
    service.delete(bookId).subscribe((book) => {
      expect(book).toBeNull();
    });

    const req = testingController.expectOne(`${url}${bookId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(null);
  });

  it('should give error if book update failed', () => {
    const changes: Partial<any> = {
      author: 'PAPA 1',
    };

    service.update(changes).subscribe(
      () => fail('Update should have failed'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500);
      }
    );

    const req = testingController.expectOne(`${url}${changes._id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });

  it('should fetch all books by given author', () => {
    service.getBookByAuthor('Hemant').subscribe((books: any) => {
      expect(books.length).toBeTruthy();
      expect(books.length).toBe(2);
    });

    const req = testingController.expectOne((r) => r.url === url);
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.get('author')).toEqual('Hemant');

    req.flush([
      {
        _id: '5c53c3367939c803daef18ef',
        title: 'JAVA 2',
        author: 'Hemant',
        price: 20,
        isbn: 'dsDGFSDGFSD$%#SDS',
        __v: 0,
        name: 'Zoom zoom',
        publishedDate: '2019-02-01T03:55:34.415Z',
      },
      {
        _id: '5e931ea15bfcd70004f6949d',
        name: 'Bad Book',
        author: 'Hemant',
        price: 89,
        __v: 0,
        publishedDate: '2020-04-12T13:58:46.383Z',
      },
    ]);
  });

  afterEach(() => {
    // to make sure only one http call in each it block
    testingController.verify();
  });
});
