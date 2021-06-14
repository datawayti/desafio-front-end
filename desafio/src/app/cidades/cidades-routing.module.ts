import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesComponent } from './component/cidades.component';

const routes: Routes = [
  { path: 'cidades', component: CidadesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadesRoutingModule { }
