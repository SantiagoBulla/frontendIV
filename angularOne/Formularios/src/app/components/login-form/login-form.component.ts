import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPassModalComponent } from '../forgot-pass-modal/forgot-pass-modal.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  openForgotPasswordModal() {
    this.dialog.open(ForgotPassModalComponent, {
      width: '600px', // ajusta según tus necesidades
      height: '400px', // ajusta según tus necesidades
    });
  }

  login() {
    const user = this.loginForm.get('username')?.value;
    const pass = this.loginForm.get('password')?.value;
    if (user && pass) {
      const usuariosString = localStorage.getItem('usuarios');
      const usuarios = usuariosString ? JSON.parse(usuariosString) : {};
      

      if (usuarios.hasOwnProperty(user)) {
        if (pass === usuarios[user].password) {
          this.router.navigateByUrl('/dashboard');
        } else {
          alert(`La contraseña no coincide con el usuario`);
        }
      } else {
        alert(`El usuario ${user} no se encuentra registrado`);
      }
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
}
