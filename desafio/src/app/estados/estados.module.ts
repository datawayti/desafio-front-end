import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EstadosRoutingModule } from './estados-routing.module';
import { EstadosComponent } from './component/estados.component';



@NgModule({
  declarations: [
    EstadosComponent
  ],
  imports: [
    CommonModule,
    EstadosRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    EstadosComponent
  ]
})
export class EstadosModule { }
