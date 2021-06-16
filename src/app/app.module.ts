import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxDrawerModule, DxListModule, DxLoadPanelModule, DxSelectBoxModule, DxTabPanelModule, DxTextBoxModule, DxToastModule, DxToolbarComponent, DxToolbarModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
    DxSelectBoxModule,
    DxTextBoxModule,
    DxDataGridModule,
    DxTabPanelModule,
    DxToolbarModule,
    DxDrawerModule,
    DxListModule,
    DxButtonModule,
    DxLoadPanelModule,
    DxToastModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
