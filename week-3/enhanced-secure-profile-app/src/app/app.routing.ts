/*
============================================
; Title: Assignment 3.4
; File Name: app.routing.ts
; Author: Professor Krasso
; Date: 7 June 2022
; Modified By: Laura Kendl
; Description: This exercise demonstrates how to build an Angular project.
===========================================
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
  path: 'home',
  component: HomeComponent,
  canActivate: [SignInGuard]
  }
]
