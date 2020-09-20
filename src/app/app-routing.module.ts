import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionComponent } from './division/division.component';
import { HomeComponent } from './home/home.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { RestaComponent } from './resta/resta.component';
import { SumaComponent } from './suma/suma.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'suma', component: SumaComponent},
  {path: 'resta', component: RestaComponent},
  {path: 'multiplicacion', component: MultiplicacionComponent},
  {path: 'division', component: DivisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
