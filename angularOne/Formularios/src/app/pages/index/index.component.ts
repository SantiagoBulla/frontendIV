import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  mostrarLoginForm: boolean = true; // Mostrar login por defecto

  cambiarFormulario(formulario: string): void {
    this.mostrarLoginForm = formulario === 'login';/*Si formulario es igual a 'login', mostrarLoginForm se establece en true, de lo contrario, se establece en false. */
  }
}
