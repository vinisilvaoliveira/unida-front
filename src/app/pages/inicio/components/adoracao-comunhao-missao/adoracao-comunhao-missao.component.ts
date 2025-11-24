import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-adoracao-comunhao-missao',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './adoracao-comunhao-missao.component.html',
  styleUrl: './adoracao-comunhao-missao.component.scss'
})
export class AdoracaoComunhaoMissaoComponent {

  slides = [
    { img: "/assets/caio-isa.png" },
    { img: "/assets/comecando-com-deus.png" },
    { img: "/assets/crianca.png" },
    { img: "/assets/domingo-culto.png" },
    { img: "/assets/caio-isa.png" },
    { img: "/assets/comecando-com-deus.png" },
    { img: "/assets/crianca.png" },
    { img: "/assets/domingo-culto.png" },
  ];
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 4,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "pauseOnHover": true,
    "infinite": true,
    "arrows": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 2, 
          "slidesToScroll": 1,
        }
      }
    ]
  };
}
