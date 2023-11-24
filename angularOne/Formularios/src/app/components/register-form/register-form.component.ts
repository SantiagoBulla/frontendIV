import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      category: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  register() {
    const registerFormValue = this.registerForm.value;

    if (registerFormValue) {
      const usuariosRecuperadosString = localStorage.getItem('usuarios');
      const usuariosRecuperados = usuariosRecuperadosString
        ? JSON.parse(usuariosRecuperadosString)
        : {};

      const username = registerFormValue.username;

      if (usuariosRecuperados[username]) {
        alert(
          '¡El nombre de usuario ya se encuentra registrado en el sistema!'
        );
      } else {
        // Agrega el nuevo usuario a los usuarios recuperados
        usuariosRecuperados[username] = registerFormValue;
        // Actualiza el localstorage con la información de los usuarios
        localStorage.setItem('usuarios', JSON.stringify(usuariosRecuperados));
        alert('¡Usuario registrado correctamente!');
        this.registerForm.reset(); // Restablece el formulario después de un registro exitoso
      }
    } else {
      alert('Error: No se proporcionaron datos para el registro');
    }
  }
}
