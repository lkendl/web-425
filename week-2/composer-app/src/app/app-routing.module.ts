/*
============================================
; Title: Assignment 2.4
; File Name: app-routing.component.ts
; Author: Professor Krasso
; Date: 2 June 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
; Resources:
; GitHub: https://github.com/buwebdev/web-425/blob/master/week-2/composer-app/src/app/app-routing.module.ts (app-routing.module.ts)
===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full'
  },
  { path: 'composer-list', component: ComposerListComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
