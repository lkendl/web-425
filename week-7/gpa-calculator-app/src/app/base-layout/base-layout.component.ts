/*
============================================
; Title: Exercise 7.3
; File Name: base-layout.component.ts
; Author: Professor Krasso
; Date: 5 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  // Add assignment variable.
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "GPA Calculator";
  }

  ngOnInit(): void {
  }

  // Call the cookieService.deleteAll function and then use the Router to navigate users to the sign-in page.
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
