/*
============================================
; Title: Exercise 5.3
; File Name: books.service.ts
; Author: Professor Krasso
; Date: 24 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // Add a books variable of type Observable<IBook>.
  books: Array<IBook>;

  constructor() {

    // Create 5 new book objects and prefill with favorite books.
    this.books = [
      {
        isbn: '1250832373',
        title: 'The Eye of the World',
        description: 'When a vicious band of half-men, half beasts invade the Two Rivers seeking their master\'s enemy, Moiraine persuades Rand al\'Thor and his friends to leave their home and enter a larger unimaginable world filled with dangers waiting in the shadows and in the light.',
        numOfPages: 688,
        authors: ['Robert Jordan']
      },
      {
        isbn: '1250251486',
        title: 'The Great Hunt',
        description: " Long thought only legend, the Horn of Valere is found, a mystical item able to raise the dead heroes of the ages. But then, everything changes when it is stolen.",
        numOfPages: 705,
        authors: ['Robert Jordan']
      },
      {
        isbn: '1250251494',
        title: 'The Dragon Reborn',
        description: "Winter has stopped the war—almost—yet men are dying, calling out for the Dragon. But where is he? In the Heart of the Stone lies the next great test of the Dragon Reborn.",
        numOfPages: 704,
        authors: ['Robert Jordan']
      },
      {
        isbn: '1250251923',
        title: 'The Shadow Rising',
        description: "The seals of Shayol Ghul are weak now, and the Dark One reaches out. The Shadow is rising to cover humankind. Against the Shadow rising stands the Dragon Reborn.",
        numOfPages: 1056,
        authors: ['Robert Jordan']
      },
      {
        isbn: '0765306298',
        title: 'New Spring',
        description: "A prequel to the Wheel of Time series: In the city of Tar Valon, a Foretelling of the future is uttered. On the slopes of Dragonmount, the immense mountain that looms over the city, is born an infant prophesied to change the world. That child must be found before the forces of the Shadow have an opportunity to kill him.",
        numOfPages: 336,
        authors: ['Robert Jordan']
      }
    ]
  }

  // Create getBooks() function and return type to an Observable Array of IBook objects.
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // Create getBook(isbn) function and return type to IBook.
  getBook(isbn: string): IBook {
    // Loop over the array of books and return a book matching the passed-in ISBN number.
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
