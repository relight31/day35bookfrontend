import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from './models';

@Component({
  selector: 'app-bookdisplay',
  templateUrl: './bookdisplay.component.html',
  styleUrls: ['./bookdisplay.component.css'],
})
export class BookdisplayComponent implements OnInit {
  book!: Book;
  bookId!: string;
  constructor(
    private bookSvc: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.bookSvc
      .getBookById(this.bookId)
      .then((result) => {
        console.log('>>>> Book:', result);
        this.book = result;
      })
      .catch((error) => {
        console.error('ERROR:', error);
      });
  }
}
