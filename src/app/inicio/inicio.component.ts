import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../services/firebase.service'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string;

  
  constructor(public log: FirebaseService) { }

  ngOnInit() {
    this.isLogget();
  }

  isLogget(){
    this.log.loggedNow();
  }

 
}
