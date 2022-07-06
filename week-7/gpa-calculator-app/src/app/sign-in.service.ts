/*
============================================
; Title: Exercise 7.3
; File Name: sign-in.service.ts
; Author: Professor Krasso
; Date: 5 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012]; // Valid IDs for sign-in.
  }

  validate(studentId: number) {
    // Iterate over the studentIds array and return true if you find a match. Return false if no matches.
  return this.studentIds.some(id => id === studentId);
  }

}
