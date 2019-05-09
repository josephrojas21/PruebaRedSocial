import { HomeComponent } from './../home/home.component';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'div[rate-heroe]'
})
export class RatesDirective {

  constructor(public home: HomeComponent) {
    
   }
    
    currentrate=0;
    @HostListener('click', ['$event.target']) onclick(btn){
        
        console.log('a', btn, "numero de clicks: ",this.home.currentRate[5]);
        
    }

}
