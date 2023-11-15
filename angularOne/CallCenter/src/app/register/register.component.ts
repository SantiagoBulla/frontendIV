import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  title = 'Register'

  public registerForm!: FormGroup; 

  constructor(private formBuilder:FormBuilder){}

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

  register(){
    console.log(this.registerForm.value);
  }


}
