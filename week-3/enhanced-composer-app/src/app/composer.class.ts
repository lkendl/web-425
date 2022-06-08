/*
============================================
; Title: Assignment 3.2
; File Name: composer.class.ts
; Author: Professor Krasso
; Date: 7 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { IComposer } from './composer.interface';

export class Composer {

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

  getComposers() {
    return this.composers; // Returns composer objects.
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) { // Loops over composer list.
      if (composer.composerId === composerId) { // If ID matches, return matching composer.
        return composer;
      }
    }
    return {} as IComposer;
  }
}
