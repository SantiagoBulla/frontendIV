import { LitElement, html } from "lit-element";
import StyleScss from '../css/dashboardStyle';

export class MyDashboard extends LitElement{

    static get styles(){
        return [StyleScss]
    } 

    render() {
        return html`
        <div id="quitar">
        <div class="container-header">
            <div class="container-img">
                <img class="logo" src="../src/img/logo.png">
            </div>
        
            <div class="options">
                <div class="option">
                    <a @click=${() => this.paquete()}>Enviar paquete</a>
                </div>
                <div class="option">
                    <a  @click=${() => this.envio()}>Mis envios</a>
                </div>

                <div class="option">
                    <a @click=${() => this.cerrar()}>Cerrar Sesión</a>
                </div>
            </div>
        </div>

        <div class="container-imgBig">  
            <img class="imgBig" src="../src/img/Header.PNG">
        </div>

        <br><br><br><br><br>
        <h2 class="titleStep">Pasos para enviar tu paquete</h2>
        <div class="container-step">
            <div class="step">
                <h3>1</h3>
                <hr>
                <img class="imgStep" src="../src/img/login.PNG">
                <p>Empaqueta cuidadosamente el artículo en una caja resistente y asegúralo de manera segura.</p>
            </div>

            <div class="step">
                <h3>2</h3>
                <hr>
                <img class="imgStep" src="../src/img/registrar.PNG">
                <p>Etiqueta el paquete con la dirección de envío y la información necesaria.</p>
            </div>

            <div class="step">
                <h3>3</h3>
                <hr>
                <img class="imgStep" src="../src/img/seguimiento.PNG">
                <p>Programa la recolección del paquete con la empresa de envío o llévalo a una sucursal cercana.</p>
            </div>

            <div class="step">
                <h3>4</h3>
                <hr>
                <img class="imgStep"  src="../src/img/hecho.PNG">
                <p>Espera la confirmación de entrega y realiza un seguimiento del estado de tu paquete si es necesario.</p>
            </div>
        </div>

        <br><br><br>

        <h2 class="notice">¡Avisos!</h2>
        <hr>
        <br><br>
        <div class="container-notices">
            <div class="img-notices">
                <img src="../src/img/aviso1.JPG">
            </div>

            <div class="img-notices">
                <img src="../src/img/aviso2.JPG">
            </div>

            <div class="img-notices">
                <img src="../src/img/aviso3.JPG">
            </div>
         </div>

        <br><br><br>
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

        <div class="pantalla">

        </div>
        `;
    }

    paquete() {
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const quitar = this.shadowRoot.querySelector('#quitar');
        quitar.classList.add("cerrar");
        pantalla.innerHTML = '<my-formulario></my-formulario>';
    }

    envio() {
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const quitar = this.shadowRoot.querySelector('#quitar');
        quitar.classList.add("cerrar");
        pantalla.innerHTML = '<my-envio></my-envio>';
    }


    cerrar() {
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const quitar = this.shadowRoot.querySelector('#quitar');
        quitar.classList.add("cerrar");
        pantalla.innerHTML = '<login-page></login-page>';
    }


}

customElements.define('my-dashboard', MyDashboard);
