import { LitElement, html, css } from 'lit-element';

export class LoginPage extends LitElement {
    static styles = [
        css`
            :host {
                border: 1px solid blue;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .container-login{
                width: 50%;
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid red;
            }
            .titulo{
                background-color: purple;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .login-body{
                background-color: green;
                width: 100%;
                /* height: auto; */
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .login-footer{
                background-color: yellow;
                width: 100%;
                display: flex;
                justify-content: end;
                align-items: center;
            }

            .login-footer button{
                margin: 1rem;
            }
            .user, .password{
                border: 1px solid orange;
                width: auto;
                height: 50%;
                padding: 2rem 4rem;
                border: 1px solid blue;
            }

            .user input, .password input{
                width: 12rem;
            }
        `
    ];

    render() {
        return html`
            <div class="container-login">
                <div class="titulo">
                    <h3>INICIO DE SESION</h3>
                </div>
                <div class="login-body">
                    <div class="user">
                        <label>Ingrese su usuario: </label>
                        <input type="text" id="user_name" placeholder="Ingrese su nombre de usuario"/>
                    </div>
                    <div class="password">
                        <label>Ingrese su contraseña: </label>
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
