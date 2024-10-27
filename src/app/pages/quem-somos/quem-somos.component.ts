import { Component } from '@angular/core';
import { HeaderIdiomaEMidiaComponent } from '../../shared/components/header-idioma-e-midia/header-idioma-e-midia.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { LinhaTempoComponent } from './components/linha-tempo/linha-tempo.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NossaHistoriaComponent } from './components/nossa-historia/nossa-historia.component';

@Component({
  selector: 'app-quem-somos',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderIdiomaEMidiaComponent,
    NossaHistoriaComponent,
    LinhaTempoComponent,
    FooterComponent
  ],
  templateUrl: './quem-somos.component.html',
  styleUrl: './quem-somos.component.scss'
})
export class QuemSomosComponent {

}
