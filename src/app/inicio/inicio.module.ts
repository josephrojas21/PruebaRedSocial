
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    FormsModule,
    NgbModule
  ],
  bootstrap: [InicioComponent]
})
export class InicioModule { }
