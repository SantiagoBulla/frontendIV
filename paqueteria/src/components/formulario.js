import { LitElement,html } from "lit-element";
import StyleScss from '../css/fomularioStyle'

export class Formulario extends LitElement{
    static get styles(){
        return [StyleScss]
    }

    render(){
        return html`
    <div id="mostrar">
        <header>
            <div class="container-header">
                <div class="container-img">
                    <img class="logo" src="../src/img/logo.png">
                </div>
                <div class="option">
                    <a @click=${() => this.volver()} >Volver</a>
                </div>
            </div>
        </header>
    <br>
    <br>
    <br>
    <br><br>
    <br>
    <br>
    <div class="container">
        <div class="form-register">
            <h1 class="title">Datos del envio</h1>
            <form>
            <div class="input-group">
                <div class="litle-container">
                    <input type="text" id="name_envio" placeholder="Nombre paquete">
                </div>
                <div class="litle-container">
                    <input type="text" id="descripcion" placeholder="Descripcion paquete">
                </div>
                <div class="litle-container">
                    <input type="text" id="direccionEnt" placeholder="Direccion de entrega">
                </div>
                <div class="litle-container">
                    <input type="text" id="direccionEnv" placeholder="Direccion de envio">
                </div>
            </div>
            </form>
            <div class="btn">
                        <button><a @click=${() => this.registerShipment()}>Registrar Envio</a></button>
            </div>
        </div>
    </div>

    <br><br>
    <br>
    <br>
    <br>
    <br>
    <footer>
        <div class="container-footer">
            <div class="container-info">
                <p>Contactanos</p>
                <p>322-987-0934</p>
                <p>paqueteriasegura123@gmail.com</p>
            </div>
    
            <div class="container-author">
                <p>Valentina Saavedra, Paula Capera, Melisa Veloza, Santiago Bulla, Nicol Briceño, Alison Briceño</p>
            </div>
        </div>
    </footer>
    </div>
    <div class="pantalla">

    </div>

        `;
    }

         registerShipment() {
        // localStorage.removeItem("usuactivo")
       //localStorage.setItem("envios",JSON.stringify({}))
        const usuario = (localStorage.getItem("usuactivo"));
        console.log(usuario);
        //capturar datos del formulario
        const nombreEnvio = this.shadowRoot.getElementById('name_envio').value
        const descripcion = this.shadowRoot.getElementById('descripcion').value
        const direccionEnv = this.shadowRoot.getElementById('direccionEnv').value
        const direccionEnt = this.shadowRoot.getElementById('direccionEnt').value
        
        console.log(nombreEnvio);
        if (nombreEnvio && descripcion && direccionEnv && direccionEnt) {

            //traer el 'objecto' de envios almacenado en el localstorage
            var enviosRecuperados = JSON.parse(localStorage.getItem("envios")) || {};
            console.log(enviosRecuperados);

            //crear data para el usuario
            let values = {
                nombreEnvio: nombreEnvio,
                descripcion: descripcion,
                direccionEnv: direccionEnv,
                direccionEnt: direccionEnt,
            };
            console.log(values);

            //agregar el nuevo usuario al 'objecto'
            enviosRecuperados[usuario][nombreEnvio] = values;

            //almacenar el 'objeto' de usuarios actualizado en el localstorage
            localStorage.setItem("envios", JSON.stringify(enviosRecuperados));
            alert('Paquete registrado exitosamente')
            this.shadowRoot.getElementById('name_envio').value="";
            this.shadowRoot.getElementById('descripcion').value="";
            this.shadowRoot.getElementById('direccionEnv').value="";
            this.shadowRoot.getElementById('direccionEnt').value="";
        } else {
            alert("Todos los campos son obligatorios. Por favor, llénelos antes de continuar.");
        }
    }


    volver() {
        const pantalla = this.shadowRoot.querySelector('.pantalla');
        const mostrar = this.shadowRoot.querySelector('#mostrar');
        mostrar.classList.add("ver");
        pantalla.innerHTML = '<my-dashboard></my-dashboard>';
    }

}
    



customElements.define('my-formulario', Formulario);