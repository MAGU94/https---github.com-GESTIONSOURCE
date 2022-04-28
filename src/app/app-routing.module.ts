import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalidadComponent } from './calidad/calidad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { InyeccionComponent } from './inyeccion/inyeccion.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { MatriceriaComponent } from './matriceria/matriceria.component';
import { MezclaComponent } from './mezcla/mezcla.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
{path: '',redirectTo: 'dashboard', pathMatch: 'full'},
{path: 'dashboard',component: DashboardComponent},
{path: 'info',component: InfoComponent},
{path: 'pages',component: PagesComponent},
{path: 'calidad',component: CalidadComponent},
{path: 'inyeccion',component: InyeccionComponent},
{path: 'mantenimiento',component: MantenimientoComponent},
{path: 'matriceria',component:MatriceriaComponent},
{path: 'mezcla',component: MezclaComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
