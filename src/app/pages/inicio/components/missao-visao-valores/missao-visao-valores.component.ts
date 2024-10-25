import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-missao-visao-valores',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './missao-visao-valores.component.html',
  styleUrl: './missao-visao-valores.component.scss'
})
export class MissaoVisaoValoresComponent {

}
