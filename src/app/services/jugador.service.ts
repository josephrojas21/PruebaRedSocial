import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  nombreJugador='';
  constructor() { }

  setNombre(nombre:string){
    this.nombreJugador= nombre;
  }

  getNombre(){
    return this.nombreJugador;
  }
}
