import { LitElement, html } from 'lit-element';
import adivinoFechaStyle from '../css/adivino-fechaStyle';

export class AdivinoFecha extends LitElement {
   
    static get styles(){
        return[adivinoFechaStyle]
    }

    static properties = {
        edad: {
            type: String,
            reflect: true
        }

    } 
    constructor(){
        super();
        this.edad = 0;
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>ADIVINA ADIVINADOR</h3>
                    <div class="pantalla">${this.edad}</div>
                </div>
                <form>
                    <div class="inputs">
                        <div class="campos">
                            <label for="agno">Ingresa tu año de nacimiento</label>
                            <input type="number" id="agno" placeholder="YYYY" />
                        </div>
                    </div>
                    <div class="button">                    
                        <button type="button" @click=${this.limpiarPantalla}>LIMPIAR</button>
                        <button type="button" @click=${this.calcularDatos}>CALCULAR</button>
                        
                    </div>
                </form>
        </div>
        `;
    }

    calcularDatos() {
        const agnoUser = parseInt(this.shadowRoot.getElementById('agno').value);
        if (!isNaN(agnoUser) && agnoUser > 0) { 
            let date = new Date();
            let agno = date.getFullYear();
            const edad = agno - agnoUser
            this.edad = `Actualmente usted tiene una edad de ${edad}`;
        }else{
            alert('Fecha incorrecta')
        }
    }
    
    limpiarPantalla() {
        this.edad = 0;
        this.shadowRoot.getElementById('agno').value =''
    }
    
}
customElements.define('adivino-fecha', AdivinoFecha);
