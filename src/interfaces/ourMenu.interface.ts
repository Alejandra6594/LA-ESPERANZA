export interface DataOurMenu {
  menu_del_dia: Array<foodMenu>;
  menu: Array<foodMenu>;
}

export interface foodMenu {
  id: number;
  img_comida: string;
  nom_comida: string;
  precio_media_racion: number;
  precio_orden: number;
  descripcion: string;
}
