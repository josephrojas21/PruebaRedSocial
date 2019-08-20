

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HttpClientModule } from '@angular/common/http';



const firebaseConfig = {
  apiKey: "AIzaSyCD9FQzYUXPiLJ_sdHO15qz8zL8gP7GzJU",
  authDomain: "redgluky-83945.firebaseapp.com",
  databaseURL: "https://redgluky-83945.firebaseio.com",
  projectId: "redgluky-83945",
  storageBucket: "",
  messagingSenderId: "795461894217",
  appId: "1:795461894217:web:bd131a001766bcc2"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
