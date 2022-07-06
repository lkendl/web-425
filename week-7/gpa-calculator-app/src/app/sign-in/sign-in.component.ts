/*
============================================
; Title: Exercise 7.3
; File Name: sign-in.component.ts
; Author: Professor Krasso
; Date: 5 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/


import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  // In the component's constructor, add references to the Router, CookieService, FormBuilder and SignInService.
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {

   }

  // Use the FormBuilder to create a new FormGroup with One FormControl named studentId.
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])] // Adds Angular's built-in Validator to the form.
    })
  }

  // Create a function to return the form controls so we can apply client-side validation in a predictable way.
  get form() { return this.signinForm.controls; }

  onSubmit() {
    // Assign the form value to a local variable to access the FormControl.
    const formValues = this.signinForm.value;
    // Get the studentId value from the studentId FormControl.
    const studentId = parseInt(formValues.studentId);

    // Create an if statement that compares the returned value from the signinService.validate() function.
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1) // If true, adds cookie to user's browser.
      this.router.navigate(['/']) // If true, redirects user to root path.
    } else {
      this.errorMessage = `The student ID you entered is invalid, please try again.`; // If false, assigns error message to errorMessage variable.
    }
  }
}
