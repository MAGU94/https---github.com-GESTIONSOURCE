import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './menu/home/home.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { PagesComponent } from './pages/pages.component';
import { CalidadComponent } from './calidad/calidad.component';
import { InyeccionComponent } from './inyeccion/inyeccion.component';
import { MatriceriaComponent } from './matriceria/matriceria.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { MezclaComponent } from './mezcla/mezcla.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    SidenavComponent,
    HomeComponent,
    BodyComponent,
    DashboardComponent,
    InfoComponent,
    PagesComponent,
    CalidadComponent,
    InyeccionComponent,
    MatriceriaComponent,
    MantenimientoComponent,
    MezclaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
