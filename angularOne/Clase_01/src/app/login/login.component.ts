import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // nombre: String = '';
  // saludo: String = '';
  username: String = '';
  password: String = '';

  ngOnInit(): void {
    //se ejecuta desde una
  }

  // mostrarNombre(){
  //   this.saludo = `Hola ${this.nombre}`;
  // }

  login() {
    if (
      !this.username ||
      !this.password ||
      this.password == ' ' ||
      this.username == ' '
    ) {
      alert(`Todos los campos son obligatorios`);
    }
  }
}
