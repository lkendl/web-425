/*
============================================
; Title: Exercise 1.3
; File Name: app.component.ts
; Author: Professor Krasso
; Date: 26 May 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
; References:
; Blackboard: WEB-425 Exercise 1.3 video
===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Kendl's world!!";
}
