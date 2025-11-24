import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderIdiomaEMidiaComponent } from './shared/components/header-idioma-e-midia/header-idioma-e-midia.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    RouterOutlet,
    HeaderComponent,
    HeaderIdiomaEMidiaComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onActivate(): void {
    console.log('passou')
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}
