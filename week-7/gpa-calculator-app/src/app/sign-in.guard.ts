/*
============================================
; Title: Exercise 7.3
; File Name: sign-in.guard.ts
; Author: Professor Krasso
; Date: 5 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user'); // Assign sessionUser the reponse from the cookieService.get('session_user') call.

    if (sessionUser) {
      return true;
    } else { // Redirects user to sign-in and returns false.
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}
