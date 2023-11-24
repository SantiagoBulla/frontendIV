import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass-modal',
  templateUrl: './forgot-pass-modal.component.html',
  styleUrls: ['./forgot-pass-modal.component.css'],
})
export class ForgotPassModalComponent implements OnInit {
  public forgotPasswordForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ForgotPassModalComponent>,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  closeModal() {
    // Cierra la modal
    this.dialogRef.close();
  }

  resetPassword() {
    const username = this.forgotPasswordForm.get('username')?.value;
    const newPassword = this.forgotPasswordForm.get('password')?.value;

    if (username && newPassword) {
      const usersString = localStorage.getItem('usuarios');
      const usuarios = usersString ? JSON.parse(usersString) : {};

      if (usuarios.hasOwnProperty(username)) {
        // Verifica si el usuario existe en el objeto
        usuarios[username].password = newPassword;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        this.dialogRef.close();
        alert(
          `Contraseña restablecida correctamente para el usuario ${username}`
        );
      } else {
        alert(`El usuario ${username} no existe en el sistema`);
      }
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
}
