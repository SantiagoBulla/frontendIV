import { LitElement, html } from 'lit-element';
import sumDivStyle from '../css/sum-divStyle';

export class SumDiv extends LitElement {

    static get styles(){
        return[sumDivStyle]
    }

    static properties = {
        result: {
            type: Number,
            reflect: true
        }
    } 
    constructor(){
        super();
        this.result = 0;
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>SUMA Y DIVIDE</h3>
                    <div class="pantalla">${this.result}</div>
                </div>
                <form>
                    <div class="campos">
                        <label for="num1">Ingresa el primer numero</label>
                        <input type="number" id="num1" placeholder="Digite un numero a sumar" />
                    </div>
                    <div class="campos">
                        <label for="num2">Ingresa el segundo numero</label>
                        <input type="number" id="num2" placeholder="Digite un numero a sumar" />
                    </div>
                    <div class="campos">
                        <label for="num3">Ingresa el tercer numero</label>
                        <input type="number" id="num3" placeholder="Digite un numero a sumar" />
                    </div>
                    <div class="campos">
                        <label for="num4">Ingresa el cuarto numero</label>
                        <input type="number" id="num4" placeholder="Digite un numero a sumar" />
                    </div>
                    <div class="campos">
                        <label for="num5">Ingresa el quinto numero</label>
                        <input type="number" id="num5" placeholder="Digite un numero a sumar" />
                    </div>
                    <div class="campos">
                        <label for="numDiv">¿En cuanto lo quieres dividir?</label>
                        <input type="number" id="numDiv" placeholder="Digite un numero a sumar" />
                    </div>
                    <div class="button">                    
                        <button type="button" @click=${this.calcular}>CALCULAR</button>
                    </div>
                </form>
        </div>
        `;
    }

    calcular() {
        const ids = ['num1', 'num2', 'num3', 'num4', 'num5'];
        const divisor = parseInt(this.shadowRoot.getElementById('numDiv').value);
        const operandos = {};
    
        for (const item of ids) {
            const num = parseInt(this.shadowRoot.getElementById(item).value);
            operandos[item] = num;//operandos es un mapa que tiene como clave el id del input y como value el numero ingresado
        }

        if (ids.some(valor => isNaN(operandos[valor]))) {
            alert('Por favor, ingrese valores válidos en todos los campos.');
        } else {
            let total = 0;
            for (const valor of ids) {
                total += operandos[valor];
            }
            total /= divisor; 
            this.result = total;
            this.limpiarCampos();
        }
    }
    
    limpiarCampos() {
        const ids = ['num1', 'num2', 'num3', 'num4', 'num5','numDiv'];
        for (const item of ids) {
            this.shadowRoot.getElementById(item).value = '';
        }
    }

}
customElements.define('sum-div', SumDiv);
