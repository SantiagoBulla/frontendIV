import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  
  public registerForm!: FormGroup; 

  constructor(private router: Router, private formBuilder:FormBuilder){}
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      dateOfBirth: ['',[Validators.required]],
      category: ['', [Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    });
  }
  // Accede fácilmente a los controles del formulario en tu template
  get f() { return this.registerForm.controls; }

  register(){}
}
