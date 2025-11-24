import { Component, inject, OnInit } from '@angular/core';
import { DadosService } from '../../shared/services/dados.service';

@Component({
  selector: 'app-programacoes',
  standalone: true,
  imports: [],
  templateUrl: './programacoes.component.html',
  styleUrl: './programacoes.component.scss'
})
export class ProgramacoesComponent implements OnInit {
  private dadosService = inject(DadosService);
  idiomaEN: any;

  ngOnInit(): void {
    this.idiomaEN = this.dadosService.getIdioma();
  }
}
