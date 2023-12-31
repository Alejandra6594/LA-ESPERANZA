import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private jsonUrl = 'assets/menu.json';
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get(this.jsonUrl);
  }
}
