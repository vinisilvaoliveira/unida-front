import { Component } from '@angular/core';
import { ContatoCamposComponent } from '../../shared/components/contato-campos/contato-campos.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    ContatoCamposComponent
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

}
