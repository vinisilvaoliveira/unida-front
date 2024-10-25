import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contato-campos',
  standalone: true,
  imports: [],
  templateUrl: './contato-campos.component.html',
  styleUrl: './contato-campos.component.scss'
})
export class ContatoCamposComponent {
  constructor(
    private toastService: ToastrService
  ) {}

  enviar() {
    console.log('teste')
    this.toastService.success("E-mail enviado com sucesso!");
  }
}
