import { LitElement, html, css } from 'lit-element';
import loginPageStyle from '../css/login-pageStyle.js';

export class LoginPage extends LitElement {

    static get styles(){
        return[loginPageStyle]
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
                    <button>Ingresar al sistema</button>
                </div>
            </div>
        `;
    }
    
}
customElements.define('login-page', LoginPage);
