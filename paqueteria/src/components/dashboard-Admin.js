import { LitElement, html } from 'lit-element';
import dashboardAdminStyle from '../css/dashboardAdmin-Style';

export class DashboardAdmin extends LitElement{
    static get styles() {
        return [dashboardAdminStyle]
    }

    render() {
        return html`
        <div id="mostrar">
                <div class="container-header">
                    <div class="container-img">
                        <img class="logo" src="../src/img/logo.png">
                    </div>
                    
                    <div class="options">
                        <div class="option">
                            <a @click=${() => this.verUsuarios()}>Usuarios</a>
                        </div>
                        <div class="option">
                            <a @click=${() => this.verPaquetes()}>Paquetes</a>
                        </div>

                        <div class="option">
                            <a @click=${() => this.salir()}>Cerrar Sesión</a>
                        </div>
                    </div>
                </div>

                <div class="container-imgBig">
                    <img class="imgBig" src="../src/img/banner.jpg">
                </div>

                <br><br><br><br><br>
                <h2 class="titleStep">Bienvenido Administrador @</h2>
                <div class="container-step">
                    <div class="step">
                        <h3>Inteligencia</h3>
                        <hr>
                        <img class="imgStep" src="../src/img/inteligencia.svg">
                        <p>Ajuste los procesos de gestión de pedidos según las reglas y los objetivos de rendimiento de la organización.</p>
                    </div>

                    <div class="step">
                        <h3>Visibilidad</h3>
                        <hr>
                        <img class="imgStep" src="../src/img/visibilidad.svg">
                        <p>Vea toda la cadena de suministro y aísle los eventos para anticipar los problemas y desarrollar procesos mas eficientes.</p>
                    </div>

                    <div class="step">
                        <h3>Planificación</h3>
                        <hr>
                        <img class="imgStep" src="../src/img/planificacion.svg">
                        <p>Haga coincidir los compromisos de entrega con el inventario como a ls recursos y las habilidades.</p>
                    </div>

                    <div class="step">
                        <h3>Inventario</h3>
                        <hr>
                        <img class="imgStep"  src="../src/img/inventario.svg">
                        <p>Obtenga una vista única del inventario, vea lo que hay en stock, en tránsito y los niveles actuales de demanda.</p>
                    </div>
                </div>

                <br>
                <br>
                <br>

                <h2 class="notice">¡No te olvides de!</h2>
                <hr>
                <br><br>
                <div class="container-notices">
                    <div class="img-notices">
                        <img src="../src/img/envio.PNG">
                    </div>

                    <div class="img-notices">
                        <img src="../src/img/usuario.PNG">
                    </div>

                    <div class="img-notices">
                        <img src="../src/img/reporte.PNG">

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

    salir(){
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const mostrar = this.shadowRoot.querySelector('#mostrar');
        mostrar.classList.add('ver');
        pantalla.innerHTML = '<login-page></login-page>';
    }



}

customElements.define('dashboard-admin', DashboardAdmin);