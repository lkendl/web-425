/*
============================================
; Title:Assignment 8.2
; File Name: book.interface.ts
; Author: Professor Krasso
; Date: 16 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}
