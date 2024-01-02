import { Component, OnInit, Input } from '@angular/core';
import { foodMenu } from 'src/interfaces/ourMenu.interface';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
})
export class CardMenuComponent implements OnInit {
  @Input() public food: foodMenu = {
    id: 0,
    img_comida: '',
    nom_comida: '',
    precio_media_racion: 0,
    precio_orden: 0,
    descripcion: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
