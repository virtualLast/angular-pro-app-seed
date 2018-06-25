import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third party
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from '../auth/shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', loadChildren: './login/login.module#LoginModule'},
      {path: 'register', loadChildren: './register/register.module#RegisterModule'}
    ]
  }
];

export const FireBaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBEwolN8mkbRldP-H1-1GAnSfmz-lvdIDA",
  authDomain: "uaproject-72b6c.firebaseapp.com",
  databaseURL: "https://uaproject-72b6c.firebaseio.com",
  projectId: "uaproject-72b6c",
  storageBucket: "uaproject-72b6c.appspot.com",
  messagingSenderId: "563143693320"
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule { }
