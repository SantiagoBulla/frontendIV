import { LitElement, html } from 'lit-element';
import tablasMultiplicarStyle from '../css/tablas-multiplicarStyle';

export class TablasMultiplicar extends LitElement {
    
    static get styles(){
        return[tablasMultiplicarStyle]
    }

    static properties = {
        tabla: {
            type: String,
            reflect: true
        }

    } 
    constructor(){
        super();
        this.tabla = 0;
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>GENARADOR DE TABLAS DE MULTIPLICAR</h3>
                    <div class="pantalla">${this.tabla}</div>
                </div>
                <form>
                    <div class="inputs">
                        <div class="campos">
                            <label for="numero">Ingresa un numero para generar la tabla de multiplicar</label>
                            <input type="number" id="numero" placeholder="¡Debe ser un numero entero!" />
                        </div>
                    </div>
                    <div class="button">                    
                        <button type="button" @click=${this.limpiarPantalla}>LIMPIAR</button>
                        <button type="button" @click=${this.generarTabla}>GENERAR TABLA </button>
                        
                    </div>
                </form>
        </div>
        `;
    }

    generarTabla() {
        const num = parseInt(this.shadowRoot.getElementById('numero').value);
            if (!isNaN(num)) {  
            const num1 = num * 1;
            const num2 = num * 2;
            const num3 = num * 3;
            const num4 = num * 4;
            const num5 = num * 5;
            const num6 = num * 6;
            const num7 = num * 7;
            const num8 = num * 8;
            const num9 = num * 9;
            const num10 = num * 10;
            this.tabla = `
                1 * ${num} = ${num1}
                2 * ${num} = ${num2}
                3 * ${num} = ${num3}
                4 * ${num} = ${num4}
                5 * ${num} = ${num5}
                6 * ${num} = ${num6}
                7 * ${num} = ${num7}
                8 * ${num} = ${num8}
                9 * ${num} = ${num9}
                10 * ${num} = ${num10}
            `
        } else {
            alert("El numero para generar la tabla de multiplicar es obligatorio")
        }
    }
    
    limpiarPantalla() {
        this.tabla = 0;
        this.shadowRoot.getElementById('numero').value =''
    }

}
customElements.define('tablas-multiplicar', TablasMultiplicar);
