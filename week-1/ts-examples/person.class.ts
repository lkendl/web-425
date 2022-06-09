/*
============================================
; Title: Exercise 1.4
; File Name: person.class.ts
; Author: Professor Krasso
; Date: 26 May 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { IPerson } from "./person.interface";

// Implement the IPerson interface.
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//Instantiate a new Person object.
let myName = new Person('Laura', 'Kendl');
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
