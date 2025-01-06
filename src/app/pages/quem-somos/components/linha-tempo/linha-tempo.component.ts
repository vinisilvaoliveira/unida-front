import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linha-tempo',
  standalone: true,
  imports: [],
  templateUrl: './linha-tempo.component.html',
  styleUrl: './linha-tempo.component.scss'
})
export class LinhaTempoComponent {
  @Input() idiomaEN: boolean = false;
}
