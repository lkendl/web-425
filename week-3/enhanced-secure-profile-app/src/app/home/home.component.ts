/*
============================================
; Title: Assignment 3.4
; File Name: home.component.ts
; Author: Professor Krasso
; Date: 7 June 2022
; Modified By: Laura Kendl
; Description: This exercise demonstrates how to build an Angular project.
===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
