import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';

export const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "quem-somos",
    component: QuemSomosComponent
  },
];
