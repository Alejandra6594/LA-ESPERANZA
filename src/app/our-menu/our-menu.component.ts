import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { DataOurMenu } from 'src/interfaces/ourMenu.interface';

@Component({
  selector: 'app-our-menu',
  templateUrl: './our-menu.component.html',
  styleUrls: ['./our-menu.component.scss'],
})
export class OurMenuComponent implements OnInit {
  constructor(private _http: MenuService) {}
  public fechaActual: string = '';
  public menuDay: Array<any> = [];
  public menuAll: Array<any> = [];

  ngOnInit(): void {
    this.getDataOurMenu();
    this.fechaActual = this.getDateNow();
  }

  getDataOurMenu = () => {
    this._http.getMenu().subscribe(
      (data) => {
        let dataMenu = data as DataOurMenu;
        this.menuDay = dataMenu.menu_del_dia;
        this.menuAll = dataMenu.menu;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  getDateNow = (): string => {
    // Obtener la fecha actual
    const fechaActual: Date = new Date();

    // Obtener el día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const diaDeLaSemana: number = fechaActual.getDay();

    // Obtener el día del mes
    const diaDelMes: number = fechaActual.getDate();

    // Obtener el mes (0 = Enero, 1 = Febrero, ..., 11 = Diciembre)
    const mes: number = fechaActual.getMonth();

    // Obtener el año
    const año: number = fechaActual.getFullYear();

    // Días de la semana en formato de cadena
    const diasSemana: string[] = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    const nombreDia: string = diasSemana[diaDeLaSemana];

    // Meses en formato de cadena
    const nombresMeses: string[] = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    const nombreMes: string = nombresMeses[mes];

    return `${nombreDia}, ${diaDelMes} de ${nombreMes} de ${año}`;
  };
}
