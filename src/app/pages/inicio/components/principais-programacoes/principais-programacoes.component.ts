import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principais-programacoes',
  standalone: true,
  imports: [],
  templateUrl: './principais-programacoes.component.html',
  styleUrl: './principais-programacoes.component.scss'
})
export class PrincipaisProgramacoesComponent {
  @Input() idiomaEN: boolean = false;
}
