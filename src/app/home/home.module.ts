import { MenuModule } from './../menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CamelCasePipe } from '../pipes/camel-case.pipe';
import { RatesDirective } from '../directives/rates.directive';

@NgModule({
  declarations: [HomeComponent, CamelCasePipe,RatesDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MenuModule,
    NgbModule,
    FormsModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
