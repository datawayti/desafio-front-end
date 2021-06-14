import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadesComponent } from './component/cidades.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CidadesComponent
  ],
  imports: [
    CommonModule,
    CidadesRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CidadesComponent
  ]
})
export class CidadesModule { }
