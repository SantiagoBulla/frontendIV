import { LitElement, html } from 'lit-element';
import secuenciaFibonacciStyle from '../css/secuencia-fibonacciStyle';

export class SecuenciaFibonacci extends LitElement {
    
    static get styles(){
        return[secuenciaFibonacciStyle]
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
                    <h3>SERIE FIBONACCI</h3>
                    <div class="pantalla">${this.result}</div>
                </div>
                <form>
                    <div class="campos">
                        <label for="longitud">Ingresa la longitud a la que quieres que llegue la serie Fibonacci</label>
                        <input type="number" id="longitud" placeholder="Digite un numero a sumar" />
                    </div>
                    <div class="button">                    
                        <button type="button" @click=${this.limpiarPantalla}>LIMPIAR</button>
                        <button type="button" @click=${this.crearSerie}>CALCULAR</button>
                        
                    </div>
                </form>
        </div>
        `;
    }

    crearSerie() {
        const longitud = parseInt(this.shadowRoot.getElementById('longitud').value);
        const fibonacci = [0,', ',1,', ',1,', '];
        let a = 0;
        let b = 1;
        let c = a + b;
        for (let i = 0; i < longitud; i++) {
            a = b;
            b = c;
            c = a + b;
            fibonacci.push(c);
            fibonacci.push(', ');
        }
        this.result = fibonacci;
    }
    
    limpiarPantalla() {
        this.result = 0;
        this.shadowRoot.getElementById('longitud').value = ''
    }

}
customElements.define('secuencia-fibonacci', SecuenciaFibonacci);
