import { Component, OnInit } from '@angular/core';

interface SideNavToogle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'spdier-man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'moana',
          fechaLanzamiento: new Date('2022-12-12'),
          precio: 300.99,
        },
      ];
    }, 3000);
  }
  // oninit es un metodo permite ejecutar una funcionalidad antes que el component se inicialice

  title = 'produccion';

  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToogle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  peliculasEnCines;
  peliculasProximosEstrenos = [];

  duplicarnumero(valor: number): number {
    return valor * 2;
  }
}
