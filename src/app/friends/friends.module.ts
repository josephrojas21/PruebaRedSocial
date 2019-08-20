import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './../menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from '../pipes/search';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [FriendsComponent,SearchPipe],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    MenuModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ]
})
export class FriendsModule { }
