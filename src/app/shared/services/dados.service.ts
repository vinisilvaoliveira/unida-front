import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor() { }

  private idiomaPrincipal = signal(false);

  getIdioma() {
    return this.idiomaPrincipal.asReadonly();
  }

  setIdioma(idioma: boolean) {
    this.idiomaPrincipal.set(idioma);
  }
}

//
