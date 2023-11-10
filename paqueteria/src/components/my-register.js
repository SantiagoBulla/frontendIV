import { LitElement, html } from "lit-element";
import registerStyle from "../css/register-Style";

export class RegistroUsu extends LitElement {
    static get styles() {
        return [registerStyle]
    }


    render() {
        return html`
        <div class="container">
            <div class="input-group">
                <h1>Registrate!</h1>
                <div class="litle-container">
                    <input type="text" id="user_name" placeholder="Usuario">
                </div>
                <div class="litle-container">
                    <input type="text" id="user_names" placeholder="Nombres">
                </div>

                <div class="litle-container">
                    <input type="text" id="user_lastname" placeholder="Apellidos">
                </div>
            
                <div class="litle-container">
                    <input type="text" id="user_country" placeholder="País">
                </div>
                <div class="litle-container">
                    <input type="text" id="user_phone" placeholder="Telefono">
                </div>
                <div class="litle-container">
                    <input type="password" id="user_password" placeholder="Contraseña">
                </div>
                <select name="rol" id="rol">
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                </select>
                <div class="btn">
                        <button><a @click=${() => this.login()}>Iniciar sesion</a></button>
                        <button><a @click=${() => this.register()}>Registrate</a></button>
                </div>
            </div>
        </div>
        <div class="pantalla">

        </div>
        `;
    }

    register() {
        //capturar datos del formulario
        const username = this.shadowRoot.getElementById('user_name').value
        const nombres = this.shadowRoot.getElementById('user_names').value
        const apellidos = this.shadowRoot.getElementById('user_lastname').value
        const pais = this.shadowRoot.getElementById('user_country').value
        const telefono = this.shadowRoot.getElementById('user_phone').value
        const contraseña = this.shadowRoot.getElementById('user_password').value
        const rol = this.shadowRoot.getElementById('rol').value

        if (username && nombres && apellidos && pais && telefono && contraseña) {

            //traer el 'objecto' de usuarios almacenado en el localstorage
            var usuariosRecuperados = JSON.parse(localStorage.getItem("usuarios")) || {};

            //crear data para el usuario
            let values = {
                nombres: nombres,
                apellidos: apellidos,
                pais: pais,
                telefono: telefono,
                clave: contraseña,
                rol: rol
            };

            //agregar el nuevo usuario al 'objecto'
            usuariosRecuperados[username] = values;
            const envios = JSON.parse(localStorage.getItem("envios")) || {};
            envios[username] = {}
            
            //almacenar el 'objeto' de usuarios actualizado en el localstorage
            localStorage.setItem("usuarios", JSON.stringify(usuariosRecuperados));
            localStorage.setItem("envios",JSON.stringify(envios))
            this.login();
        } else {
            alert("Todos los campos son obligatorios. Por favor, llénelos antes de continuar.");
        }
    }

    login() {
        const loginDiv = this.shadowRoot.querySelector('.container');
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        loginDiv.classList.add("cerrar");
        pantalla.innerHTML = '<login-page></login-page>';
    }
}

customElements.define('my-register', RegistroUsu);
