import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: "./inicio/inicio.module#InicioModule"},
    {path: 'inicio', loadChildren: "./inicio/inicio.module#InicioModule"},
    {path: 'home', loadChildren: "./home/home.module#HomeModule"},
    {path: 'heroes', loadChildren: "./heroes/heroes.module#HeroesModule"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
