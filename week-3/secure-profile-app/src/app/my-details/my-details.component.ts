/*
============================================
; Title: Exercise 2.3
; File Name: my-details.component.ts
; Author: Professor Krasso
; Date: 2 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/


import { Component, OnInit } from '@angular/core';

// Create a Person class with local variables: fullName, favoriteFood, and favoriteColor.
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];

  // Supply constructor with fullName, favoriteFood and favoriteColor values.
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName; // Sets the local variable with this parametized value(e.g., when passed with favoriteFood, it will set local favoriteFood variable).
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  // Tests the class binds data correctly- so when pass in the values and instantiate a new Person object, those values get added to that class.
  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person; // Variable myProfile is a Person data-type.

  constructor() {
    this.myProfile = new Person("Laura Kendl", "Butter Chicken", "Yellow");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
