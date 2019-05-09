import { MenuModule } from './../menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MenuModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [HeroesComponent]
})
export class HeroesModule { }
