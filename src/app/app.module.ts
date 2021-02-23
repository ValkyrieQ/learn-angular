import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './topbanner/topbanner.component';
import { CatagoryMenuComponent } from './catagorymenu/catagorymenu.component';
import { SearchBarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    NavbarComponent,
    TopBannerComponent,
    CatagoryMenuComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
