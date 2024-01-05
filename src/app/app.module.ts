import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    OurMenuComponent,
    CardMenuComponent,
    AboutUsComponent,
    BannerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
