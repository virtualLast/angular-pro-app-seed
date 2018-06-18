import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';
// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


/*// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEwolN8mkbRldP-H1-1GAnSfmz-lvdIDA",
    authDomain: "uaproject-72b6c.firebaseapp.com",
    databaseURL: "https://uaproject-72b6c.firebaseio.com",
    projectId: "uaproject-72b6c",
    storageBucket: "uaproject-72b6c.appspot.com",
    messagingSenderId: "563143693320"
  };
  */