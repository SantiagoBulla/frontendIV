import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
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

  register() {
    this.router.navigate(['']);
  }

  login() {
    if (
      !this.username ||
      !this.password ||
      this.password == ' ' ||
      this.username == ' '
    ) {
      alert('todos los campos obligatorios');
    } else {
      var usuariosStr = localStorage.getItem('usuarios');
      var usuariosRecuperados = usuariosStr ? JSON.parse(usuariosStr) : {};
      var datos = usuariosRecuperados[this.username.toString()];
      if (datos) {
        if(datos.clave === this.password){
          this.router.navigate(['/dashboard']);
        }else{
          alert('La contraseña no coincide con la registrada en el sistema');
          this.password = '';
        }
      } else {
        alert('El usuario no encuentra registrado');
        this.username = '';
        this.password = '';
      }
    }
  }
}
