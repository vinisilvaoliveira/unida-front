import { Component, inject, OnInit } from '@angular/core';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  private dadosService = inject(DadosService)
  idiomaEN: any;

  constructor() {}

  ngOnInit(): void {
    this.idiomaEN = this.dadosService.getIdioma();
  }
}
