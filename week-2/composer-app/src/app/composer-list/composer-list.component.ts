/*
============================================
; Title: Assignment 2.4
; File Name: composer-list.component.ts
; Author: Professor Krasso
; Date: 2 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Component, OnInit } from '@angular/core';

// Create Composer class with fields: fullName and genre.
export default class Composer {
  fullName: string;
  genre: string;

  // Add constructor with parameters: fullName and genre. Map them to class fields.
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Add variable composers and give it an Array<Composer> data type.
  composers: Array<Composer>;

  constructor() {
    // Create a new Array and initialize it with five new Composer objects.
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Frederic Chopin", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ]

  }

  ngOnInit(): void {
  }

}
