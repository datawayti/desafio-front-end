import { EstadosComponent } from './estados/estados.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaTempoComponent } from './clima-tempo/clima-tempo.component';

const routes: Routes =
  [

    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },

    {
      path: 'home',
      children: [
        {
          path: '',
          component: HomeComponent
        }
      ]
    },

    {
      path: 'estado',
      children: [
        {
          path: '',
          component: EstadosComponent
        },
        {
          path: ':uf',
          component: EstadosComponent
        }
      ]
    },
    {
      path: 'clima-tempo',
      children: [
        {
          path: '',
          component: ClimaTempoComponent
        },
        {
          path: ':id',
          component: ClimaTempoComponent
        }
      ]
    },
    { path: '**', redirectTo: 'home' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
