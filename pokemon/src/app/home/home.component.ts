import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  mostrarLoginForm: boolean = true; // Mostrar login por defecto

  cambiarFormulario(formulario: string): void {
    this.mostrarLoginForm = formulario === 'login';/*Si formulario es igual a 'login', mostrarLoginForm se establece en true, de lo contrario, se establece en false. */
  }
}
