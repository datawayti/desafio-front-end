import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitaisComponent } from './capitais.component';

const routes: Routes = [
  {
    path: '',
    component: CapitaisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapitaisRoutingModule {}
