/*
============================================
; Title: Exercise 2.2
; File Name: app-routing.module.ts
; Author: Professor Krasso
; Date: 2 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import about, contact and home components.
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
