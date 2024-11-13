import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderIdiomaEMidiaComponent } from '../../shared/components/header-idioma-e-midia/header-idioma-e-midia.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-fundamentos-fe',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderIdiomaEMidiaComponent,
    FooterComponent
  ],
  templateUrl: './fundamentos-fe.component.html',
  styleUrl: './fundamentos-fe.component.scss'
})
export class FundamentosFeComponent {

}
