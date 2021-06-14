import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { DxMenuModule } from 'devextreme-angular';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent],
  imports: [
    BrowserModule,
    SharedModule,
    DxMenuModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
