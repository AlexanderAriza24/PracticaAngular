import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';
import { FormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';
import { HomeComponent } from './home/home.component';
import { EmcabezadoComponent } from './emcabezado/emcabezado.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    NavMenuComponent,
    MultiplicacionComponent,
    DivisionComponent,
    HomeComponent,
    EmcabezadoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
