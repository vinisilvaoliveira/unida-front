import { Component } from '@angular/core';
import copy from 'copy-to-clipboard';

@Component({
  selector: 'app-contribua',
  standalone: true,
  imports: [],
  templateUrl: './contribua.component.html',
  styleUrl: './contribua.component.scss'
})
export class ContribuaComponent {

  copiarTexto() {
    copy('05.552.672.0001-80');
  }
}
