import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // standalone: true, //?standalone nos ayuda con las importaciones de componentes
  // imports: [], //? aqui es donde pondremos el nombre del componente o modulo que necesitemos usar dentro de este componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'esperanza:Comida Ec';
}
