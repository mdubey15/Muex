import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NavComponent = class NavComponent {
    constructor(auth) {
        this.auth = auth;
    }
};
NavComponent = tslib_1.__decorate([
    Component({
        selector: 'nav',
        template: `
  <mat-toolbar class="menu">
  <a mat-button routerLink="/Marketplace">Home</a>
  <a mat-button routerLink="/MusicItem">MusicItem</a> 
  <span style="flex:1 1 auto;"> </span>
  <a mat-button *ngIf="!auth.isAuthenticated" style="font-size: 12px;" routerLink="/Customer">Profile</a>
  <a mat-button *ngIf="!auth.isAuthenticated" style="font-size: 12px;" routerLink="/Register">Register</a>
  <a mat-button *ngIf="!auth.isAuthenticated" style="font-size: 12px;" routerLink="/Login">Login</a>
  <a mat-button *ngIf="auth.isAuthenticated" style="font-size: 12px;" (click)="auth.logout()">Logout</a>
      </mat-toolbar>
  `
    })
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map