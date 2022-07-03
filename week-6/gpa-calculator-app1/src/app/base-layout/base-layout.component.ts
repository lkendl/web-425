/*
============================================
; Title: Exercise 6.3
; File Name: base-layout.component.ts
; Author: Professor Krasso
; Date: 1 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  // Add assignment variable.
  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.3 - Layouts";
  }

  ngOnInit(): void {
  }

}
