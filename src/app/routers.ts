import { Routes } from '@angular/router'
import { CapitalComponent } from './capital/capital.component';
import { ClimaComponent } from './clima/clima.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [];

export const allAppRoutes: Routes = [
  { path: 'clima', component: ClimaComponent },
  { path:'capital', component: CapitalComponent },
];

export const router = [CapitalComponent, ClimaComponent]