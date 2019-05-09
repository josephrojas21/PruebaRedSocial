import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:any  =[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.datosheores();
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

}
