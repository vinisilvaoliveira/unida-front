import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-adoracao-comunhao-missao',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './adoracao-comunhao-missao.component.html',
  styleUrl: './adoracao-comunhao-missao.component.scss'
})
export class AdoracaoComunhaoMissaoComponent implements OnInit {

  readonly renderer = inject(Renderer2);
  slideIndex = 0;
  
  slides = [
    { img: "/assets/galeria/eder-quadriculado.jpg" },
    { img: "/assets/galeria/katia.jpg" },
    { img: "/assets/galeria/ze.jpg" },
    { img: "/assets/galeria/ster.jpg" },
    { img: "/assets/galeria/joao.jpg" },
    { img: "/assets/galeria/jhow.jpg" },
    { img: "/assets/galeria/junior-cantando.jpg" },
    { img: "/assets/galeria/linao-orando.jpg" },
    { img: "/assets/galeria/maise.jpg" },
    { img: "/assets/galeria/nessa.jpg" },
    { img: "/assets/galeria/robson.jpg" },
    { img: "/assets/galeria/ster.jpg" },
    { img: "/assets/galeria/sueli.jpg" },
  ];
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1, 
          "slidesToScroll": 1,
        }
      }
    ]
  };

  ngOnInit(): void {
    // this.showSlides();
  }

  showSlides() {
    let slides = document.getElementsByClassName('texto');

    for (let i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none')
      this.renderer.removeClass(slides[i], 'animation');
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1 }

    this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
    this.renderer.addClass(slides[this.slideIndex - 1], 'animation');
    setTimeout(() => {
      if (window.location.pathname === "/") {
        this.showSlides();
      }
    }, 2000);
  }
}
