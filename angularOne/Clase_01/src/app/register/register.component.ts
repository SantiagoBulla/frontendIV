import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  username: String = '';
  name: String = '';
    // lastName: String = '';
    // phone: String = '';
    // address: String = '';
  password: String = '';

  login(){
    this.router.navigate(['/login']);
  }

  register() {
    if (!this.username || !this.name || !this.password) {
      alert('Todos los campos son obligatorios');
    } else {
      // Retrieve the 'users' object from local storage
      var usuariosRecuperadosString = localStorage.getItem("usuarios");
      var usuariosRecuperados = usuariosRecuperadosString ? JSON.parse(usuariosRecuperadosString) : {};
  
      //crea la informacion para los usuarios
      let values = {
        nombre: this.name,
        nombreUsuario: this.username,
        clave: this.password,
        rol:'asesor'       
      };
  
      // agrega el nuevo usuario a los usuarios recuperados
      usuariosRecuperados[this.username.toString()] = values;
  
      // actualiza el localstorage con la info de los usuarios
      localStorage.setItem("usuarios", JSON.stringify(usuariosRecuperados)); 
      this.router.navigate(['/login']); 
    }
  }
}
