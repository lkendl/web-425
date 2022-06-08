/*
============================================
; Title: Exercise 3.3
; File Name: home.component.ts
; Author: Professor Krasso
; Date: 7 June 2022
; Modified By: Laura Kendl
; Description: This exercise demonstrates there are multiple ways to add routing
; in an Angular project.
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isLoggedIn: Boolean = true;

  constructor(private route: ActivatedRoute) {

    //Assign the isLoggedIn variable the value being passed from the sign-in.component.ts using Angular's built-in queryParamMap function.
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isloggedIn'));
  }

  ngOnInit(): void {
  }

}
