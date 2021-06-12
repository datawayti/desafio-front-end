import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DxButtonModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxDataGridModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxButtonModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxDataGridModule,
  ],
  exports: [
    DxButtonModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxDataGridModule,
  ],
})
export class SharedModule {}
