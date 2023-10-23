import { LitElement, html } from 'lit-element';
import loginPageStyle from '../css/login-pageStyle.js';
import * as fs from 'node:fs/promises';

export class LoginPage extends LitElement {

    static get styles() {
        return [loginPageStyle]
    }

    static properties = {
        userData:{
            type: String
        }
    }

    constructor() {
        super();
        this.userData = null; // Inicializamos userData como nulo
      }

    render() {
        return html`
            <div class="container-login">
                <div class="titulo">
                    <h3>INICIO DE SESION</h3>
                </div>
                <div class="login-body">
                    <div class="user">
                        <label>Usuario:</label>
                        <input type="text" id="user_name" placeholder="Ingrese su nombre de usuario"/>
                    </div>
                    <div class="password">
                        <label>Contraseña:</label>
                        <input type="text" id="user_name" placeholder="Ingrese su contraseña"/>
                    </div>
                </div>
                <div class="login-footer">
                    <button><a @click=${() => this.login()}>INGRESAR</a></button>
                </div>
            </div>
        `;
    }

    async login() {
        try {
            const users = await fs.promises.readFile('paqueteria/src/bd/users.json', 'utf-8');
            this.userData = JSON.parse(users); // Almacenamos los datos en userData
            console.log(this.userData);
            this.requestUpdate(); // Forzamos un nuevo renderizado
          } catch (error) {
            console.error(error);
          }
    }
}
customElements.define('login-page', LoginPage);
