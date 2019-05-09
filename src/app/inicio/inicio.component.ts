import { Component, OnInit } from '@angular/core';
import { JugadorService } from './../services/jugador.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string;

  
  constructor(private jug:JugadorService) { }

  ngOnInit() {
  }

  entrar(){
    this.jug.setNombre(this.nombre)
  }
}
