import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component';
import { DevExtremeModule } from 'devextreme-angular';

@NgModule({
  declarations: [EstadosComponent],
  imports: [CommonModule, DevExtremeModule],
  exports: [EstadosComponent]
})
export class EstadosModule {}
