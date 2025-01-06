import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nossa-historia',
  standalone: true,
  imports: [],
  templateUrl: './nossa-historia.component.html',
  styleUrl: './nossa-historia.component.scss'
})
export class NossaHistoriaComponent {
  @Input() idiomaEN: boolean = false;
}
