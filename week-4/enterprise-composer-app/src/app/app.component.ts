/*
============================================
; Title: Assignment 4.4
; File Name: app.component.ts
; Author: Professor Krasso
; Date: 15 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 4.4 - Async Pipe';
}
