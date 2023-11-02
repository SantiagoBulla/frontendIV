import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: String = '';
  name: String = '';
  lastName: String = '';
  phone: String = '';
  address: String = '';
  password: String = '';


  register() {
    if (!this.username || !this.name || !this.lastName || !this.phone || !this.address || !this.password) {
      alert('Todos los campos son obligatorios');
    }else{
      alert('exito')
    }
  }
}
