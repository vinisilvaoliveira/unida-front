import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuValue:boolean=false;
  private dadosService = inject(DadosService)
  idiomaEN: any;

  constructor() {}

  ngOnInit(): void {
    this.idiomaEN = this.dadosService.getIdioma();
  }

  openMenu(){
     this.menuValue =! this.menuValue ;
   }
    closeMenu() {
     this.menuValue = false;
   }
}
