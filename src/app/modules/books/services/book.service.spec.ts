import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from './book.service';

fdescribe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all books - GET /books', () => {
    pending();
  });

  it('should get one book - GET /books/12', () => {
    pending();
  });

  it('should add one book - POST /books', () => {
    pending();
  });

  it('should update one book - PUT /books/12', () => {
    pending();
  });

  it('should remove one book - DELETE /books/12', () => {
    pending();
  });
});
