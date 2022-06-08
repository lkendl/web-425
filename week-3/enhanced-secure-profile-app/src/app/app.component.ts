/*
============================================
; Title: Exercise 3.3
; File Name: app.component.ts
; Author: Professor Krasso
; Date: 2 7 June 2022
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
  assignment: string = 'Secure Profile App';
}
