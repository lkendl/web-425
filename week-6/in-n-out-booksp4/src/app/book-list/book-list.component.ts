/*
============================================
; Title: Exercise 6.2
; File Name: book-list.component.ts
; Author: Professor Krasso
; Date: 1 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
; [REF A] Stackoverflow: https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc (Property '...' has no initializer and is not definitely assigned in the constructor)
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // Create a books variable of type Observable<IBook[]>.
  books: Observable<IBook[]>;
  // Create a variable named header of type Array<string> and assign it isbn, title, numOfPages, authors.
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  // Create a variable named book of type IBook.
  book: IBook | undefined; // [REF A]

  // Add BooksService and MatDialog to the components constructor.
  constructor(private booksService: BooksService, private dialog: MatDialog) {

    // Call booksService.getBooks() function and assign the results to the books variable.
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  // Create function showBookDetails(isbn: string).
  showBookDetails (isbn: string) {
    // Call booksService.getBook(isbn) and map the return object to the book variable.
    this.book = this.booksService.getBook(isbn);

    // Create a dialogRef object and assign it to the dialog.open() function.
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book); // Tests service is returning correct book object.

    // Call afterClosed() function and set the book variable to null.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
       }
    });
  }

}
