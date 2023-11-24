import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPassModalComponent } from '../forgot-pass-modal/forgot-pass-modal.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private dialog: MatDialog) {}

  openForgotPasswordModal() {
    this.dialog.open(ForgotPassModalComponent, {
      width: '600px', // ajusta según tus necesidades
      height: '400px', // ajusta según tus necesidades
    });
  }

}
