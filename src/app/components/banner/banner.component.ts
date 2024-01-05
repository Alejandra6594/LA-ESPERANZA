import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() public urlImg: string = '';
  @Input() public message: string = '';

  public urlImgBanner: string = '';
  public msgBanner: string = '';

  ngOnInit(): void {
    this.urlImgBanner = `url(${this.urlImg})`;
    this.msgBanner = this.message;
  }
}
