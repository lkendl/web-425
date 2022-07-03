/*
============================================
; Title: Assignment 6.4
; File Name: gpa.component.ts
; Author: Professor Krasso
; Date: 1 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
