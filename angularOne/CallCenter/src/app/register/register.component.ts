import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  title = 'Register'

  public registerForm!: FormGroup; 
  constructor(private router: Router, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surnames: ['', [Validators.required]],
      dateBirth: ['', [Validators.required, this.fechaNacimientoValida]],
      nickName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  fechaNacimientoValida(control: AbstractControl): { [key: string]: any } | null {//: { [key: string]: any } | null representa el tipo de retorno, que puede ser un objeto de clave string y valor cualquiera, es decir la informacion sobre los errores o puede retornar null

    ///control define el control del formulario que se esta haciendo
    const inputDate = new Date(control.value);//control.value representa el valor actual del campo de formulario asociado al AbstractControl que se está validando
    const currentDate = new Date();//fecha actual
    
    if (inputDate > currentDate) {
      // La fecha ingresada es posterior a la fecha actual
      return { 'fechaInvalida': true };
    }
  
    // La fecha es válida
    return null;
  }

  login(){
    this.router.navigate(['/login']);
  }

  register() {
    const emailControl = this.registerForm.get('email');
  
    // Verifica que el formulario y el campo de email estén disponibles y que el email tenga un valor
    if (this.registerForm && emailControl && emailControl.value) {
      // Recupera los usuarios desde el localstorage
      const usuariosRecuperadosString = localStorage.getItem('usuarios');
      const usuariosRecuperados = usuariosRecuperadosString ? JSON.parse(usuariosRecuperadosString) : {};
  
      // Agrega el nuevo usuario a los usuarios recuperados
      usuariosRecuperados[emailControl.value] = this.registerForm.value;
  
      // Actualiza el localstorage con la info de los usuarios
      localStorage.setItem("usuarios", JSON.stringify(usuariosRecuperados)); 
      this.router.navigate(['']); 
    } else {
      console.error('Formulario o campo de email no disponibles o el email no tiene un valor.');
    }
  }


}
