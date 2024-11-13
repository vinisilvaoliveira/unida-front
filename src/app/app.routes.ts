import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ContribuaComponent } from './pages/contribua/contribua.component';
import { FundamentosFeComponent } from './pages/fundamentos-fe/fundamentos-fe.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { MinisteriosComponent } from './pages/ministerios/ministerios.component';
import { ProgramacoesComponent } from './pages/programacoes/programacoes.component';

export const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "quem-somos",
    component: QuemSomosComponent
  },
  {
    path: "contribua",
    component: ContribuaComponent
  },
  {
    path: "quem-somos/fundamentos-fe",
    component: FundamentosFeComponent
  },
  {
    path: "quem-somos/valores",
    component: ValoresComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "ministerios",
    component: MinisteriosComponent
  },
  {
    path: "programacoes",
    component: ProgramacoesComponent
  }
];
