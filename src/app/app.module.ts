import { HomeModule } from './home/home.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DevExtremeModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';

import { CidadesModule } from './cidades/cidades.module';
import { HttpClientModule } from '@angular/common/http';
import { EstadosModule } from './estados/estados.module';
import { ClimaTempoModule } from './clima-tempo/clima-tempo.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CidadesModule,
    EstadosModule,
    ClimaTempoModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
