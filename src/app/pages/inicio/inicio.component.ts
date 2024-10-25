import { Component, OnInit, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeaderIdiomaEMidiaComponent } from '../../shared/components/header-idioma-e-midia/header-idioma-e-midia.component';
import { ContatoCamposComponent } from '../../shared/components/contato-campos/contato-campos.component';
import { MissaoVisaoValoresComponent } from './components/missao-visao-valores/missao-visao-valores.component';
import { PrincipaisProgramacoesComponent } from './components/principais-programacoes/principais-programacoes.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderIdiomaEMidiaComponent,
    ContatoCamposComponent,
    MissaoVisaoValoresComponent,
    PrincipaisProgramacoesComponent,
    FooterComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {

  slideIndex = 0;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');


    for (i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none')
      this.renderer.removeClass(slides[i], 'animation');
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1 }

    this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
    this.renderer.addClass(slides[this.slideIndex - 1], 'animation');
    setTimeout(() => {
      this.showSlides();
    }, 2000);
  }
}