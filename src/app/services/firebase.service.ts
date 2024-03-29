
import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user: User;

  constructor(public  afAuth: AngularFireAuth, public  router:  Router) {
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(this.user));
          } else {
            localStorage.setItem('user', null);
          }
        })
   }

  async  login(email:  string, password:  string) {
        try {
            await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
            this.router.navigate(['home']);
        } catch (e) {
            alert("Error!"  +  e.message);
        }
  }

  async logout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['inicio']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

  async logged(){
    this.afAuth.authState.subscribe(user => {
      if (user) {
        
      } else {
        this.router.navigate(['inicio']);
      }
    })
  }
  async loggedNow(){
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      } else {
        
      }
    })
  }

  
}
