/*
============================================
; Title: Exercise 1.3
; File Name: app.module.ts
; Author: Professor Krasso
; Date: 26 May 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
; References:
; Blackboard: WEB-425 Exercise 1.3 video
===========================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
