import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  title = 'example-react-form';

  public formLogin!: FormGroup; // Usando el operador de "no nulo" es la propiedad (variable que contendra el grupo del formulario)

  constructor(private formBuilder: FormBuilder) {
    // No es necesario inicializar formLogin aquí, se hará en ngOnInit.
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({//se construye el formGroup
      email: ['', [Validators.required, Validators.email]],//recibe y almacena todo lo que tenga que ver con el formControlName = email en el html
      password: ['', [Validators.required, Validators.minLength(6)]],//con validator se agrega las validaciones que se quieran
      terms: ['', [Validators.required, Validators.requiredTrue]],
    });

    this.loadAPI();//metodo para sobrecargar datos en los campos del formGroup se llama incialmente porque esta en el ngOnInit
  }

  /*loadAPI(): any {
    const response = {
      email: 'fragokcito@misena.edu.co',
      password: '12345678',
      terms: true
    };

    this.formLogin.patchValue({
      email : response.email,
      password:response.password,
      terms:response.terms
    });
  }*/

  loadAPI(): any {
    const response = {//emula una resuesta de una API que trae un objeto
      email: 'ingenieroGato@misena.edu.co',
      password: '12345678',
      terms: true
    };

    this.formLogin.patchValue(response);//como son los mismos nombres se le pasa al formGroup la response
  }

  send(): any {//metodo que se llama cuando se le da click al boton del html
    console.log('el email es: ',this.formLogin.value.email);
    console.log('la password es: ',this.formLogin.value.password);
    console.log('el estado de terminos es: ',this.formLogin.value.terms);
  }
}
