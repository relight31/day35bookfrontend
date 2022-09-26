import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Book, BookSummary } from '../components/models';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(limit = 20, offset = 0): Promise<BookSummary[]> {
    const params = new HttpParams().set('limit', limit).set('offset', offset);
    return lastValueFrom(this.http.get<BookSummary[]>('api/books', { params }));
  }

  getBookById(bookId: string): Promise<Book> {
    return lastValueFrom(this.http.get<Book>('/api/book/' + bookId));
  }
}
