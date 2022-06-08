/*
============================================
; Title: Exercise 3.3
; File Name: sign-in.component.ts
; Author: Professor Krasso
; Date: 7 June 2022
; Modified By: Laura Kendl
; Description: This exercise demonstrates there are multiple ways to add routing
; in an Angular project.
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  // Add Angular's built-in Router to the component's constructor.
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;
    // Use router.navigate() function to navigate to HomeComponent and pass-in the isLoggedIn value.
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
