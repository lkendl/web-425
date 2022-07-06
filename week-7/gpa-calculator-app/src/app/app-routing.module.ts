/*
============================================
; Title: Exercise 7.3
; File Name: app-routing.module.ts
; Author: Professor Krasso
; Date: 5 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '', // Anyone that follows the BaseLayoutComponent, they will be using the BaseLayout in all of the child components of that Base component.
        component: HomeComponent
      }
    ],
    canActivate: [SignInGuard] // Adds SignInGuard to parent.
  },
  {
    path:'session', // Session is the parent route and uses the AuthLayoutComponent and will navigate to the NotFoundComponent.
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  {
    path: '**', // If there is any URL not found in the routing file, redirects to session/not-found.
    redirectTo: 'session/not-found' // Session is the parent route.
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
