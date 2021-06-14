import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CidadesModule } from '../cidades/cidades.module';
import { DevExtremeModule } from 'devextreme-angular';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CidadesModule,
    DevExtremeModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
