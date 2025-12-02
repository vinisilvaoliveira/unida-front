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
  textoPix = "iunidavilacarrao@gmail.com"
  copiarTexto() {
    copy(this.textoPix);
  }
}
