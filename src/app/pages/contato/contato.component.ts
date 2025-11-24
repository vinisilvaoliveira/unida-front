import { Component, inject, OnInit } from '@angular/core';
import { ContatoCamposComponent } from '../../shared/components/contato-campos/contato-campos.component';
import { DadosService } from '../../shared/services/dados.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    ContatoCamposComponent
  ],
  templateUrl: './contato.component.html',  
  styleUrl: './contato.component.scss'
})
export class ContatoComponent  implements OnInit {
  private dadosService = inject(DadosService);
  idiomaEN: any;

  ngOnInit(): void {
    this.idiomaEN = this.dadosService.getIdioma();
  }
}
