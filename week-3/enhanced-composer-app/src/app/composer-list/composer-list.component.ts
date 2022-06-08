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
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class'; // Imports Composer class.

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Create a local component variable named "composers" of an Array of IComposer.
  composers: Array<IComposer>;

  constructor() {
    // Create a new instance of the Composer class with new Composer(). Call getComposer function to return list of this.composers.
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
