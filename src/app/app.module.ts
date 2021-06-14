import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DxTextBoxModule,
         DxSelectBoxModule,
         DxTemplateModule,
         DxButtonModule,
         DxTextAreaModule,
         DxDataGridModule,
         DxBulletModule,
         DxDrawerModule,
         DxToolbarModule,
         DxListModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { CapitaisComponent } from './capitais/capitais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapitaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxTemplateModule,
    DxButtonModule,
    DxTextAreaModule,
    HttpClientModule,
    DxDataGridModule,
    DxBulletModule,
    DxDrawerModule,
    DxToolbarModule,
    DxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
