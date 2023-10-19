import { LitElement, html } from 'lit-element';
import areaCirculoStyle from '../css/area-circuloStyle';

export class AreaCirculo extends LitElement { 
   
    static get styles(){
        return[areaCirculoStyle]
    }

    static properties = {
        areavalue: {
            type: String,
            reflect: true
        }
    } 
    constructor(){
        super();
        this.areavalue = '0';
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>CALCULAR AREA DE UN CIRCULO</h3>
                    <div class="pantalla">${this.areavalue}</div>
                </div>
                <form>
                    <div class="main">
                        <div class="two">
                            <div class="circulo"></div>
                        </div>
                        <div class="four">
                            <label for="radioCirculo"><em>Ingrese el radio del circulo</em></label>
                            <input type="number" id="radioCirculo" placeholder="¿cuanto vale el radio?" />
                        </div>
                    </div>
                    <div class="button">                    
                        <button type="button" @click=${this.limpiarPantalla}>LIMPIAR</button>
                        <button type="button" @click=${this.calcularArea}>CALCULAR AREA</button>
                        
                    </div>
                </form>
        </div>
        `;
    }

    calcularArea() {
        const radio = parseInt(this.shadowRoot.getElementById('radioCirculo').value);
        if (!isNaN(radio) && radio > 0) {
            const area = 3.141592653589793 * (radio * radio);
            this.areavalue = `El area del circulo con radio ${radio} es: ${area}`;     
        } else {
            alert('El radio es un valor obligatorio y debe ser un valor positivo');
        }
        
           
    }
    
    limpiarPantalla() {
        this.areavalue = 0;
        this.shadowRoot.getElementById('radioCirculo').value = '';        
    }
    
}
customElements.define('area-circulo', AreaCirculo);
