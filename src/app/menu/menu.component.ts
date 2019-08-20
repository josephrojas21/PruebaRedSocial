import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  collapsed = true;

  constructor( private log: FirebaseService) { }

  ngOnInit() {
    console.log(this.isLogget());
    
  }

  closeSession(){
    this.log.logout();
  }

  isLogget(){
    this.log.logged();
  }

}
