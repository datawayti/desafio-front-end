import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitaisComponent } from './capitais/capitais.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'capitais', component: CapitaisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
