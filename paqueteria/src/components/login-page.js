import { LitElement, html } from 'lit-element';
import loginPageStyle from '../css/login-pageStyle.js';
import { users } from '../bd/bd.js'; // Importa el diccionario de usuarios desde el módulo "users.js"
// import * as fs from 'node:fs/promises';

export class LoginPage extends LitElement {

    static get styles() {
        return [loginPageStyle]
    }

    static properties = {
        loginStatus:{
            type: String
        }
    }

    constructor() {
        super();
        this.loginStatus = ''
      }

    render() {
        return html`
            <div class="container-login">
                <div class="titulo">
                    <h3>INICIO DE SESION</h3>
                </div>
                <div class="login-body">
                <p>${this.loginStatus}</p>
                    <div class="user">
                        <label for="user_name">Usuario:</label>
                        <input type="text" id="user_name" placeholder="Ingrese su nombre de usuario"/>
                    </div>
                    <div class="password">
                        <label for="user_password">Contraseña:</label>
                        <input type="password" id="user_password" placeholder="Ingrese su contraseña"/>
                    </div>
                </div>
                <div class="login-footer">
                    <button><a @click=${() => this.login()}>INGRESAR</a></button>
                </div>
            </div>
        `;
    }

    login() {
        const user_name = this.shadowRoot.getElementById('user_name').value
        const user_password = this.shadowRoot.getElementById('user_password').value
        // Comprobar si el usuario existe en el diccionario
        if (users.hasOwnProperty(user_name)) {
            const user = users[user_name];
            //['jose', 'diaz', 'password1234']
            // Verificar si la contraseña coincide
            if (user[2] === user_password) {
                this.loginStatus = 'Su usuario ha sido validado y tiene un logueo exitoso'
            } else {
                this.loginStatus = 'La contraseña no coincide con el usuario'
            }
        } else {
            this.loginStatus = 'Usuario no encontrado en el sistema'
        }
    }
}
customElements.define('login-page', LoginPage);
