import { LitElement, html, css } from 'lit-element';

export class SecuenciaFibonacci extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                margin: 0;
                padding:0;
                font-family: sans-serif;
                display:flex;
                justify-content: center;

            }
            .contenedor{      
                width: 40vw;
            }
            .header{
                background-color:#4F5F73;
                padding:1.5rem;
            }
            .header h3{
                color: #F2F2F2;
            }
            form{
                background-color: #CCC4C0;
            }
            .campos{
                padding:1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap:.8rem;
            }
            .campos input{
                border: none;
                border-radius:.3rem;
                border-bottom: 1px solid #8C4B45;
                border-left: 1px solid #8C4B45;
                border-right: 1px solid #8C4B45;
                outline: none;
                padding: 5px 10px;
                color: #344050;
                background-color: #CCC4C0;
            }
            .campos input::placeholder{
                color:#344050;
            }
            .button{
                padding-right:1rem;
                padding-bottom:1rem;
                display:flex;
                justify-content:end;
                background-color: #CCC4C0;
                gap: .5rem;
            }
            .button button{
                border: none;
                border: 2px solid #8C4B45;
                color:white;
                padding: .5rem;
                border-radius: .5rem;
                background-color: #8C4B45;
                cursor:pointer;
            }
            .pantalla{
                margin:.3rem;
                padding: .5rem;
                border-radius:.5rem;
                background-color:white;
            }
        `
    ];


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
    }
}
customElements.define('secuencia-fibonacci', SecuenciaFibonacci);
