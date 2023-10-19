import { LitElement, html } from 'lit-element';
import areaCuadradoStyle from '../css/area-cuadradoStyle';

export class AreaCuadrado extends LitElement {
    
   
    static get styles(){
        return[areaCuadradoStyle]
    }


    static properties = {
        lado: {
            type: String,
            reflect: true
        }
    } 
    constructor(){
        super();
        this.lado = '0';
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>CALCULAR AREA DE UN CUADRADO</h3>
                    <div class="pantalla">${this.lado}</div>
                </div>
                <form>
                    <div class="main">
                        <div class="two">
                            <div class="cuadrado"></div>
                        </div>
                        <div class="four">
                            <label for="ladoCuadrado"><em>Valor del lado del cuadrado</em></label>
                            <input type="number" id="ladoCuadrado" placeholder="¿cuanto vale el lado?" />
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
        const ladoCuadrado = parseInt(this.shadowRoot.getElementById('ladoCuadrado').value);
        if (!isNaN(ladoCuadrado)) {
            const area = ladoCuadrado * ladoCuadrado;
            this.lado = `El area del cuadrado con lado ${ladoCuadrado} es: ${area}`;    
        } else {
            alert("El lado es un valor obligatorio");
        }
        
    }
    
    limpiarPantalla() {
        this.lado = 0;
        this.shadowRoot.getElementById('ladoCuadrado').value = '';        
    }
}
customElements.define('area-cuadrado', AreaCuadrado);
