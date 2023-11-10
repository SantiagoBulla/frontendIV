import { LitElement, html } from "lit-element";
import StyleScss from '../css/paquetesStyle';

export class MyPaquete extends LitElement {

    static get styles() {
        return [StyleScss]
    }

    static properties = {
        envios: { type: Object }, //Almacenamos los registros de los envios
    };

    connectedCallback() {
        super.connectedCallback();
        this.consultarRegistros();
    }

    consultarRegistros() {
        // Usuarios almacenados en el localStorage(objeto)
        const enviosRecuperados = JSON.parse(localStorage.getItem("envios")) || {};
        const datos = JSON.stringify(enviosRecuperados);
        // console.log(datos);
        // Almacenar los registros
        this.envios = JSON.parse(datos);
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
                    <a @click=${() => this.verUsuarios()} >Usuarios</a>
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
                    <td>Nombre del envio</td>
                    <td>Descripción</td>
                    <td>Dirección de envio</td>
                    <td>Dirección de entrega</td>
                </tr>

            
                ${Object.keys(this.envios).map(values => {
                    return Object.keys(this.envios[values]).map(dato => html`
                    <tr>
                        <td>${this.envios[values][dato].nombreEnvio}</td>
                        <td>${this.envios[values][dato].descripcion}</td>
                        <td>${this.envios[values][dato].direccionEnv}</td>
                        <td>${this.envios[values][dato].direccionEnt}</td>
                    </tr>
                `)})}
            </table>
        </div>
        </div>
        <div class="pantalla">

        </div>
        `;
    }

    // mostrar() {
    //     Object.keys(this.envios).map(values => {
    //         Object.keys(this.envios[values]).map(dato => {
    //             console.log(this.envios[values][dato].nombreEnvio);
    //             console.log(this.envios[values][dato].descripcion);
    //             console.log(this.envios[values][dato].direccionEnv);
    //             console.log(this.envios[values][dato].direccionEnt);
    //         })
    //     })
        
    // }
    
    verUsuarios() {
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const mostrar = this.shadowRoot.querySelector('#mostrar');
        mostrar.classList.add("ver");
        pantalla.innerHTML = '<my-usuario></my-usuario>';
    }

    verPaquetes() {
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const mostrar = this.shadowRoot.querySelector('#mostrar');
        mostrar.classList.add("ver");
        pantalla.innerHTML = '<my-paquete></my-paquete>';
    }

    volver() {
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const mostrar = this.shadowRoot.querySelector('#mostrar');
        mostrar.classList.add("ver");
        pantalla.innerHTML = '<dashboard-admin></dashboard-admin>';
    }
}

customElements.define('my-paquete', MyPaquete);