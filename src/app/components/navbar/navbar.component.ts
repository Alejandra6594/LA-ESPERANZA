import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Lógica para verificar si se ha hecho scroll y actualizar la variable isScrolled
    this.isScrolled = window.scrollY > 0;
  }
}
