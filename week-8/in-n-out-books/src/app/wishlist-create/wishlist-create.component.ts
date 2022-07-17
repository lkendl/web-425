/*
============================================
; Title:Assignment 8.2
; File Name: wishlist-create.component.ts
; Author: Professor Krasso
; Date: 16 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    // Create a new instance of the IWishlistItem object.
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  addItem() {
    // Create a new object literal of type IWishlistItem and call the addItemEmitter to emit the object.
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    // Set the item object to an empty object.
    this.item = {} as IWishlistItem;
  }

}
