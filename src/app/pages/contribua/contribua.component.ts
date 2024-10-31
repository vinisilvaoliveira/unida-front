import { Component } from '@angular/core';

@Component({
  selector: 'app-contribua',
  standalone: true,
  imports: [],
  templateUrl: './contribua.component.html',
  styleUrl: './contribua.component.scss'
})
export class ContribuaComponent {

  copiarTexto() {
    navigator.clipboard.writeText('05.552.672.0001-80')
  }
}
