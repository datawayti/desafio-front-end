import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule } from 'devextreme-angular';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { TemplateModule } from './template/template.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CidadesModule } from './cidades/cidades.module';
import { EstadosModule } from './estados/estados.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    TemplateModule,
    FormsModule,
    HttpClientModule,
    CidadesModule,
    EstadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
