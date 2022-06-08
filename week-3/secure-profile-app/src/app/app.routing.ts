/*
============================================
; Title: Exercise 3.3
; File Name: app.routing.ts
; Author: Professor Krasso
; Date: 7 June 2022
; Modified By: Laura Kendl
; Description: This exercise demonstrates there are multiple ways to add routing
; in an Angular project.
===========================================
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
  path: 'home',
  component: HomeComponent
  }
]
