import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesComponent } from './cidades.component';
import { DevExtremeModule } from 'devextreme-angular';

@NgModule({
  declarations: [CidadesComponent],
  imports: [CommonModule, DevExtremeModule],
  exports: [CidadesComponent],
})
export class CidadesModule {}
