import { LitElement, html } from "lit-element";
import StyleScss from '../css/paquetesStyle';

export class MyUsuario extends LitElement{

    static get styles(){
        return [StyleScss]
    } 

    static properties = {
        usuarios: { type: Object }, //Almacenamos los registros
    };

    connectedCallback() {
        super.connectedCallback();
        this.consultarRegistros();
    }

    consultarRegistros() {
        // Usuarios almacenados en el localStorage(objeto)
        const usuariosRecuperados = JSON.parse(localStorage.getItem("usuarios")) || {};
        
        // Almacenar los registros
        this.usuarios = usuariosRecuperados;
      }
      
      render() {
        return html`
        <div id="mostrar">
        <div class="container-header">
        <div class="container-img">
            <img class="logo" src="src/img/logo.png">
        </div>
    
        <div class="options">
            <div class="option">
                <a @click=${() => this.verUsuarios()}>Usuarios</a>
            </div>
            <div class="option">
                <a @click=${() => this.verPaquetes()}>Paquetes</a>
            </div>

            <div class="option">
                <a @click=${() => this.volver()}>Volver</a>
            </div>
        </div>
    </div>

    <br><br><br>

          <div class="container-table">
            <table>
              <tr>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Teléfono</td>
                <td>País</td>
                <td>Contraseña</td>
                <td>Rol</td>
              </tr>
              ${Object.keys(this.usuarios).map(username => html`
                <tr>
                  <td>${this.usuarios[username].nombres}</td>
                  <td>${this.usuarios[username].apellidos}</td>
                  <td>${this.usuarios[username].telefono}</td>
                  <td>${this.usuarios[username].pais}</td>
                  <td>${this.usuarios[username].clave}</td>
                  <td>${this.usuarios[username].rol}</td>
                </tr>
              `)}
            </table>
          </div>
        </div>

        <div class="pantalla">

        </div>
        `;
      }

      verUsuarios(){
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const mostrar = this.shadowRoot.querySelector('#mostrar');
        mostrar.classList.add("ver");
        pantalla.innerHTML = '<my-usuario></my-usuario>';
      }

      verPaquetes(){
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const mostrar = this.shadowRoot.querySelector('#mostrar');
        mostrar.classList.add("ver");
        pantalla.innerHTML = '<my-paquete></my-paquete>';
      }

    volver(){
      const pantalla = this.shadowRoot.querySelector('.pantalla');
      const mostrar = this.shadowRoot.querySelector('#mostrar');
      mostrar.classList.add("ver");
      pantalla.innerHTML = '<dashboard-admin><dashboard-admin>';
    }
    }      

customElements.define('my-usuario', MyUsuario);