import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookSummary } from './models';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  books: BookSummary[] = [];
  constructor(private bookSvc: BookService) {}

  ngOnInit(): void {
    this.bookSvc
      .getBooks()
      .then((result) => {
        console.info(result);
        this.books = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
