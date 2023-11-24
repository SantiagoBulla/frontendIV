import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-pass-modal',
  templateUrl: './forgot-pass-modal.component.html',
  styleUrls: ['./forgot-pass-modal.component.css']
})
export class ForgotPassModalComponent {

  constructor(private dialogRef: MatDialogRef<ForgotPassModalComponent>) {}

  closeModal() {
    // Cierra la modal
    this.dialogRef.close();
  }
}