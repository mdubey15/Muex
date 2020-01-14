import { Component } from '@angular/core'
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'nav',
  template: `
  <mat-toolbar class="menu">
  <a mat-button routerLink="/Marketplace">Home</a>
  <a mat-button routerLink="/Chat">Deal</a>
  <a mat-button routerLink="/MusicItem">MusicItem</a> 
  <span style="flex:1 1 auto;"> </span>
  <a mat-button *ngIf="!auth.isAuthenticated" style="font-size: 12px;" routerLink="/Customer">Profile</a>
  <a mat-button *ngIf="!auth.isAuthenticated" style="font-size: 12px;" routerLink="/Register">Register</a>
  <a mat-button *ngIf="!auth.isAuthenticated" style="font-size: 12px;" routerLink="/Login">Login</a>
  <a mat-button *ngIf="auth.isAuthenticated" style="font-size: 12px;" (click)="auth.logout()">Logout</a>
      </mat-toolbar>
  `
})
export class NavComponent {
 
  constructor(private auth:AuthService){

  }

}

