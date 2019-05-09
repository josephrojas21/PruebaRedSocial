import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentsRatesService {
  currentrate=0;
  constructor() { }

  setRate(rate:number){
    this.currentrate=rate;
  }

  getRate(){
    return this.currentrate;
  }
}
