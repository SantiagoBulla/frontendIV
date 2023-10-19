import { LitElement, html } from 'lit-element';
import pitagorasFormulaStyle from '../css/pitagoras-formulaStyle';

export class PitagorasFormula extends LitElement {
   
    static get styles(){
        return[pitagorasFormulaStyle]
    }

    static properties = {
        result: {
            type: String,
            reflect: true
        },
        value: {
            type: String,
            reflect: true
        }
    } 
    constructor(){
        super();
        this.result = '0';
        this.value = 0;
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>CALCULAR HIPOTENUSA DE UN TRIANGULO</h3>
                    <div class="pantalla">${this.result}</div>
                </div>
                <form>
                    <div class="main">
                        <div class="one">
                            <label for="catetoA"><em>Cateto</em></label>
                            <input type="number" id="catetoA" placeholder="cateto a" />
                        </div>
                        <div class="two">
                            <div class="triangulo"></div>
                        </div>
                        <div class="three">
                            <label for="longitud"><b>Hipotenusa</b></label>
                            <label type="text" id="hiponusa">${this.value}</label>
                        </div>
                        <div class="four">
                            <label for="catetoB"><em>Cateto</em></label>
                            <input type="number" id="catetoB" placeholder="cateto b" />
                        </div>
                    </div>
                    <div class="button">                    
                        <button type="button" @click=${this.limpiarPantalla}>LIMPIAR</button>
                        <button type="button" @click=${this.calcularHipotenusa}>CALCULAR HIPOTENUSA</button>
                        
                    </div>
                </form>
        </div>
        `;
    }

    calcularHipotenusa() {
        const catetoA = parseInt(this.shadowRoot.getElementById('catetoA').value);
        const catetoB = parseInt(this.shadowRoot.getElementById('catetoB').value);

        if((catetoA < 0) || (catetoB < 0)){
            alert('ingrese un valor correcto para los catetos')
        }else if (!isNaN(catetoA) && !isNaN(catetoB)) {
            const a = (Math.pow(catetoA,2))
            const b = (Math.pow(catetoB,2))
            const hipotenusas = Math.sqrt((a+b));
            this.value = hipotenusas;
            this.result = `El valor de la hipotenusa con catetos de ${catetoA} y ${catetoB} es: ${hipotenusas}`;
        } else {
            alert('El valor de los catetos es obligatorio');
        }
    }
    
    limpiarPantalla() {
        this.result = 0;
        this.value = ''
        this.shadowRoot.getElementById('catetoA').value = '';
        this.shadowRoot.getElementById('catetoB').value = '';
        
    }
    
}
customElements.define('pitagoras-formula', PitagorasFormula);
