/*
============================================
; Title: Exercise 4.3
; File Name: composer-list.component.ts
; Author: Professor Krasso
; Date: 15 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
; Note:
; deBounce slows down how fast a user calls the server each time
; they enter text in a search field.
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Create a local component variable named "composers" of an Array of IComposer.
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  // Add the ComposerService to the component's constructor.
  constructor(private composerService: ComposerService) {
    // Create a new instance of the Composer class with new Composer(). Call getComposer function to return list of this.composers.
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val)); // Any text entered into the FormControl will emit the valueChange event. After 500 milliseconds, call filterComposers function.
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
