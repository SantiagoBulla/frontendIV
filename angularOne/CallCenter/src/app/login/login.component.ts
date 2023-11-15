import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'Login'

  public loginForm!: FormGroup; 

  constructor(private router: Router, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    });
  }

  login(){
    // console.log(this.loginForm.value);
    const email = this.loginForm.get('email');
    const password = this.loginForm.get('password');
    if (email && password) {
      const usuariosString = localStorage.getItem('usuarios');
      const usuariosRecuperados = usuariosString ? JSON.parse(usuariosString): {};
      if (usuariosRecuperados[email.value] !== undefined) {
        const dataUser = usuariosRecuperados[email.value];
        if (dataUser.password === password.value) {
          this.router.navigate(['/dashboard']);
        } else {
          alert(`La contraseña con coincide con el usuario ${email.value}`);
        }        
      } else {
        alert(`El usuario ${email.value} no existe en el sistema`);
      }
    } else {
      alert(`Campos obligatorios`);
    }
  }



}
