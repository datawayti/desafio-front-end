import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosComponent } from './component/estados.component';

const routes: Routes = [
  { path: 'estados', component: EstadosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadosRoutingModule { }
