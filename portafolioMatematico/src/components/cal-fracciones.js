import { LitElement, html } from 'lit-element';
import calFraccionesStyle from '../css/cal-fraccionesStyle';

export class CalFracciones extends LitElement {

    static get styles(){
        return[calFraccionesStyle]
    }

    static properties = {
        result: {
            type: String,
            reflect: true
        },
        numerador: {
            type: String,
            reflect: true
        },
        denominador: {
            type: String,
            reflect: true
        }
    } 
    constructor(){
        super();
        this.result = '0';
        this.numerador = 0;
        this.denominador = 0;
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>OPERACIONES DE FRACCIONES</h3>
                    <div class="pantalla">${this.result}</div>
                </div>
                <form>
                    <div class="main">
                        <div class="one">
                            <input type="number" class="valor" id="num1" placeholder="numerador 1"/>
                        </div>
                        <div class="two">
                            <input type="number" class="valor" id="deno1" placeholder="denominador 1"/>
                        </div>
                        <div class="three">
                            <input type="number" class="valor" id="num2" placeholder="numerador 2"/>
                        </div>
                        <div class="four">
                            <input type="number" class="valor" id="deno2" placeholder="denominador 2"/>
                        </div>
                        <div class="five">
                            <label>${this.numerador}</label>
                        </div>
                        <div class="six">
                        <label>${this.denominador}</label> 
                        </div>
                    </div>
                    <div class="button">   
                        <input  type="text" id="operacion" placeholder="Ingrese la operacion (+,/,*,-)"/>               
                        <button type="button" @click=${this.limpiarPantalla}>LIMPIAR</button>
                        <button type="button" @click=${this.operarFraccion}>CALCULAR </button>
                    </div>
                </form>
        </div>
        `;
    }


    operarFraccion() {
        const num1 = parseInt(this.shadowRoot.getElementById('num1').value);
        const deno1 = parseInt(this.shadowRoot.getElementById('deno1').value);
        const num2 = parseInt(this.shadowRoot.getElementById('num2').value);
        const deno2 = parseInt(this.shadowRoot.getElementById('deno2').value);
        const op = this.shadowRoot.getElementById('operacion').value;
        switch (op) {
            case '+':
                const total = (((num1*deno2)+(num2*deno1))/(deno1*deno2))
                this.numerador = total;
                this.denominador = 1;
                this.result = `El resultado de la suma de fraccciones es: ${this.numerador}`
                break;
            case '-':
                const totalResta = (((num1*deno2)-(num2*deno1))/(deno1*deno2))
                this.numerador = totalResta;
                this.denominador = 1;
                this.result = `El resultado de la resta de fraccciones es: ${this.numerador}`
                break;
            case '*':
                this.numerador = num1 * num2;
                this.denominador = deno1 * deno2;
                this.result = `El resultado de la multiplicacion de fraccciones es: ${this.numerador} / ${this.denominador}`
                break;
            case '/':
                this.numerador = num1 / deno2;
                this.denominador = deno1 / num2;
                this.result = `El resultado de la division de fraccciones es: ${this.numerador} / ${this.denominador}`
                break;
                    
            default:
                alert('Esa operacion no es posible')
                break;
        }
        
    }
    
    limpiarPantalla() {
        this.result = 0;
        this.shadowRoot.getElementById('num1').value =''
        this.shadowRoot.getElementById('deno1').value=''
        this.shadowRoot.getElementById('num2').value=''
        this.shadowRoot.getElementById('deno2').value=''
        this.shadowRoot.getElementById('operacion').value=''
        this.numerador=0;
        this.denominador=0;
        this.result=0;

    }
    
}
customElements.define('cal-fracciones', CalFracciones);
