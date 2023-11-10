import { LitElement, html } from 'lit-element';
import loginPageStyle from '../css/login-pageStyle.js';
import { RegistroUsu } from "../components/my-register.js";

export class LoginPage extends LitElement {

    static get styles() {
        return [loginPageStyle]
    }

    static properties = {
        loginStatus: {
            type: String
        }
    }

    constructor() {
        super();
        this.loginStatus = ''
    }

    render() {
        return html`
        <div class="container">
            <div class="container-login">
                <div class="login-body">
                    <div class="title">
                        <h1>BIENVENIDOS</h1>
                    </div>
                    <div class="google-log-in">
                        <div class="google-icon">
                            <img src="./src/img/google-icon-2.png" alt="google-icon">
                        </div>
                        <div class="google-text">
                            <h5>Login with google</h5>
                        </div>
                    </div>
                    <div class="separate-section">
                        <hr>
                        <p>OR LOGIN WITH EMAIL</p>
                        <hr>
                    </div>
                    <div class="login-inputs">
                        <label for="username">USERNAME</label>
                        <input type="text" name="username" id="username">
                        <label for="password">PASSWORD</label>
                        <input type="password" name="password" id="password">
                    </div>
                    <div class="log-in-options">
                        <div class="stay-conected">
                            <input type="checkbox" name="stayconnect" id="stayconnect">
                            <label for="stayconnect">Stay connected</label>
                        </div>
                        <div>
                            <a href="">I forgot my password</a>
                        </div>
                    </div>
                    <div class="btn-login">
                        <button @click=${() => this.login()}>INICIAR SESION</button>
                    </div>
                    <div class="register-link">
                        <p>No tienes cuenta? <a @click=${() => this.register()}>Registrate</a></p>
                    </div>
                </div>
                <div class="login-image">
                    <img src="./src/img/login-image.jpg" alt="login-image">
                </div>
            </div>
        </div>
        <div class="pantalla">

        </div>
        `;
    }

    login() {
        //capturar datos
        const user_name = this.shadowRoot.getElementById('username').value
        const user_password = this.shadowRoot.getElementById('password').value

        if (user_name) {
            //recurperar el objeto de usuarios
            var usuariosRecuperados = JSON.parse(localStorage.getItem("usuarios"));
            const datos = usuariosRecuperados[user_name];//almacenar los datos del usuario ingresado {si existe}

            //validaciones
            if (datos) {
                // Verificar si la contraseña coincide
                if (user_password == datos.clave) {
                    const loginDiv = this.shadowRoot.querySelector('.container');
                    const pantalla = this.shadowRoot.querySelector('.pantalla');
                    loginDiv.classList.add("cerrar");
                    if (datos.rol === '1') {
                        pantalla.innerHTML = '<dashboard-admin></dashboard-admin>';
                    } else {
                        pantalla.innerHTML = '<my-dashboard></my-dashboard>';
                        console.log('capturado');
                        localStorage.removeItem("usuactivo");
                        localStorage.setItem("usuactivo",user_name);
                    }
                    
                } else {
                    alert('La contraseña no coincide con el usuario');
                    this.shadowRoot.getElementById('password').value = '';
                }
            } else {
                alert('Usuario no encontrado en el sistema');
                this.shadowRoot.getElementById('username').value = '';
                this.shadowRoot.getElementById('password').value = '';
            }
        } else {
            alert('Ingrese los datos de usuario y contraseña');
        }
    }

    register() {
        const loginDiv = this.shadowRoot.querySelector('.container');
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        loginDiv.classList.add("cerrar");
        pantalla.innerHTML = '<my-register></my-register>';
    }
}
customElements.define('login-page', LoginPage);
