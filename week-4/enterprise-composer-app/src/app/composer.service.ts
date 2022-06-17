/*
============================================
; Title: Assignment 4.4
; File Name: composer.service.ts
; Author: Professor Krasso
; Date: 15 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [ // Follows the format of the IComposer interface.
      {
        composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Frederic Chopin", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
      }
    ]
  }

  // Add function getComposer with the return type of an Observable array of IComposer objects.
  getComposers(): Observable<IComposer[]> {
    return of(this.composers); // Returns the Observable array of composer objects.
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) { // Loops over composer list.
      if (composer.composerId === composerId) { // If ID matches, return matching composer.
        return composer;
      }
    }
    return {} as IComposer;
  }

  // Add filter to search composer array by name- set return type to Observable of IComposer array.
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe( // Pipe() chains functions together.
      map(composers => // Map()returns a new array of objects.
        composers.filter(composer => // Filters composer array.
          composer.fullName.toLowerCase().indexOf(name) > -1)))
  }

}
