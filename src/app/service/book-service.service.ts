import {Injectable} from '@angular/core';
import {Book} from "../book/book";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  url = 'http://[::]:8081/books';

  constructor(private http: HttpClient) {
  }


  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.url, book);
  }

  addBook(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  findByID(id): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + id);
  }
}


