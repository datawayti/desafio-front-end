import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule } from 'devextreme-angular'
import { DxSelectBoxModule,
         DxTextBoxModule,
         DxTemplateModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClimaComponent } from './clima/clima.component';
import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routers';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BuscaClimaComponent } from './busca-clima/busca-clima.component';
import { ServiceApiService } from "./service-api.service";
import { CapitalComponent } from './capital/capital.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClimaComponent,
    BuscaClimaComponent,
    CapitalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DevExtremeModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ServiceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

