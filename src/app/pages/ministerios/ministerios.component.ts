import { Component, inject, OnInit } from '@angular/core';
import { DadosService } from '../../shared/services/dados.service';

@Component({
  selector: 'app-ministerios',
  standalone: true,
  imports: [],
  templateUrl: './ministerios.component.html',
  styleUrl: './ministerios.component.scss'
})
export class MinisteriosComponent implements OnInit {
  private dadosService = inject(DadosService);
  idiomaEN: any;

  ngOnInit(): void {
    this.idiomaEN = this.dadosService.getIdioma();
  }
}
