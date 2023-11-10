import { LitElement, html } from "lit-element";
import StyleScss from '../css/envioStyle';


export class MyEnvio extends LitElement {

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
        const usuario = localStorage.getItem("usuactivo");
        // Usuarios almacenados en el localStorage(objeto)
        const enviosRecuperados = JSON.parse(localStorage.getItem("envios")) || {};

        // Almacenar los registros
        this.envios = enviosRecuperados[usuario];
    }

    render() {
        return html`        
        <div id="mostrar">
    <div class="container-envio">
        <div class="container-header">
            <div class="container-img">
                <img class="logo" src="../src/img/logo.png">
            </div>
        
            <div class="options">
                <div class="option">
                    <a @click=${() => this.volver()}>Volver</a>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <h1>Mis Paquetes Enviados</h1>
        ${Object.keys(this.envios).map(envioKey => html`
            <div class="product">
                <img src="../src/img/paquete.png" alt="Producto 1">
                <div class="product-details">
                    <div>
                        <h2>${this.envios[envioKey].nombreEnvio}</h2>
                    </div>
                    
                    <div class="descripcion">
                        <h4>Descripción del Paquete:</h4>
                        <p>${this.envios[envioKey].descripcion}</p>
                    </div>
                    <div class="direccionEnt">
                        <h4>Dirección de entrega:</h4>
                        <p>${this.envios[envioKey].direccionEnt}</p>
                    </div>
                    <div class="direccionEnv">
                        <h4>Dirección de envío:</h4>
                        <p>${this.envios[envioKey].direccionEnv}</p>
                    </div>
                    <button class="details-button">Ver Detalles de Envío</button>   
                </div>
            </div>
        `)}

        <footer>
            <div class="container-footer">
                <div class="container-info">
                    <p>Contactanos</p>
                    <p>322-987-0934</p>
                    <p>pequeteriasegura123@gmail.com</p>
                </div>

                <div class="container-author">
                    <p>Valentina Saveedra, Paula Capera, Melisa Veloza, Santiago Bulla, Nicol Briceño, Alison Briceño</p>
                </div>
            </div>
        </footer>
    </div>
    </div>
    <div class="pantalla">

    </div>
        `;
    }

    volver() {
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const mostrar = this.shadowRoot.querySelector('#mostrar');
        mostrar.classList.add("ver");
        pantalla.innerHTML = '<my-dashboard></my-dashboard>';
    }

}

customElements.define('my-envio', MyEnvio);