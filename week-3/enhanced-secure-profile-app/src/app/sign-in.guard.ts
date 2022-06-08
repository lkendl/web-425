/*
============================================
; Title: Assignment 3.4
; File Name: sign-in.guard.ts
; Author: Professor Krasso
; Date: 7 June 2022
; Modified By: Laura Kendl
; Description: This exercise demonstrates there are multiple ways to add routing
; in an Angular project.
===========================================
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  // Add the Router to the guard's constructor.
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
  }
}
