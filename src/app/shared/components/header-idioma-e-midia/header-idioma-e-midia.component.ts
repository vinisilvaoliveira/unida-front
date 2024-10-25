import { Component, inject } from '@angular/core';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-header-idioma-e-midia',
  standalone: true,
  imports: [],
  templateUrl: './header-idioma-e-midia.component.html',
  styleUrl: './header-idioma-e-midia.component.scss'
})
export class HeaderIdiomaEMidiaComponent{
  private dadosService = inject(DadosService);

  idiomaEN: any;

  setIdioma(valor: boolean) {
    this.dadosService.setIdioma(valor);
    this.idiomaEN = valor;
  }
}
