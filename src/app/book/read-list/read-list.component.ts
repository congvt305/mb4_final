import {Component, OnInit} from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {Router} from "@angular/router";
import {Book} from "../book";

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.css']
})
export class ReadListComponent implements OnInit {
  books: Book[]= [];

  constructor(private bookService: BookServiceService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.getReadBooks();
  }

  getReadBooks() {
    this.bookService.getBooks().subscribe(data => {
      for (const book of data) {
        if (book.read === true) {
          this.books.push(book);
        }
      }
    });
  }

  onClick(index) {
    let book: Book = this.books[index];
    book.read = false;
    this.bookService.updateBook(book).subscribe(data => {
      this.books.splice(index, 1);
    });
    this.router.navigate(['/read']);
  }

}
