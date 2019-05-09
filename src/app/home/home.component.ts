import { CurrentsRatesService } from './../services/currents-rates.service';
import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { JugadorService } from './../services/jugador.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbRatingConfig]

})
export class HomeComponent implements OnInit {

  nombre='';
  currentRate = [0,0,0,0,0,0,0,0,0,0];
  
  time=4000
  heroes:any  =[];
  poderActual ='magia';
  poderes: any = [
    {poder:'super fuerza'},
    {poder:'multimillonario'},
    {poder:'super traje'},
    {poder:'pequeño como hormiga'},
    {poder:'mucho honor'},
    {poder:'buen peleador'},
    {poder:'escudo invencible'},
    {poder:'casi-inmortal'},
    {poder:'volar'},
    {poder:'magia'},
    {poder:'super velocidad'},
    {poder:'escalar'},
    {poder:'telarañas'},
    {poder:'poder del rayo'},
    {poder:'arma de dioses'}
  ]

  
  constructor( config: NgbRatingConfig, private http: HttpClient,
               private jug:JugadorService, private rate: CurrentsRatesService) {
    config.max = 10;
    config.readonly = true;
    
   }

 

  ngOnInit() {
    this.datosheores();
    this.intervalo();
    this.nombre=this.jug.getNombre();
  }


  async datosheores(){
    let url ='../../assets/heroes.json';
    new Promise(resolve =>{
      this.http.get(url).subscribe(data =>{
        
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            this.heroes= element
            
          }
        }
      console.log(this.heroes);
      console.log(resolve);
      
      
      })
    }).catch(error =>{
      console.log(error);
      
    });
  }

  cambiarPoder(){
    var total:Number = this.poderes.length;
    for (let i = 0; i < total; i++) {
      let aleatorio = Math.floor(Math.random()*(this.poderes.length));
      let seleccion = this.poderes[aleatorio]
      
      this.poderActual=seleccion.poder ;
    }
  }

  intervalo(){
    setInterval(function(){
      this.cambiarPoder();
    }.bind(this),this.time)
  }

  revisar(i:number,poder1:string,poder2:string,poder3:string){
    if(poder1 == this.poderActual || poder2 == this.poderActual || poder3 == this.poderActual){
      this.currentRate[i]++
      if(this.currentRate[i] >=8 ){
        this.time=2000
      }
      if(this.currentRate[i] == 10){
        alert('has ganado')
      }
      console.log('hols'+poder1,poder2,poder3);

    }else{
      console.log('no tiene el poder');
      console.log('error'+poder1,poder2,poder3);
      
      
    }
    
  }

}
