import { LitElement, html, css } from 'lit-element';

export class PromedioNumeros extends LitElement {
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
                color: #344050;
                font-size: 1rem;
            }
        `
    ];

    static properties = {
        promedio: {
            type: Number,
            reflect: true
        }
    } 
    constructor(){
        super();
        this.promedio = 0;
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>PROMEDIO DE NOTAS NUMERICAS<h3>
                    <div class="pantalla">${this.promedio}</div>
                </div>
                <form>
                    <div class="campos">
                        <label for="num1">Ingresa el primer numero</label>
                        <input type="number" id="num1" placeholder="Digite un numero a promediar" />
                    </div>
                    <div class="campos">
                        <label for="num2">Ingresa el segundo numero</label>
                        <input type="number" id="num2" placeholder="Digite un numero a promediar" />
                    </div>
                    <div class="campos">
                        <label for="num3">Ingresa el tercer numero</label>
                        <input type="number" id="num3" placeholder="Digite un numero a promediar" />
                    </div>
                    <div class="campos">
                        <label for="num4">Ingresa el cuarto numero</label>
                        <input type="number" id="num4" placeholder="Digite un numero a promediar" />
                    </div>
                    <div class="campos">
                        <label for="num5">Ingresa el quinto numero</label>
                        <input type="number" id="num5" placeholder="Digite un numero a promediar" />
                    </div>
                    <div class="button">                    
                        <button type="button" @click=${this.calcular}>PROMEDIAR</button>
                    </div>
                </form>
        </div>
        `;
    }

    calcular() {
        const ids = ['num1', 'num2', 'num3', 'num4', 'num5'];
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
            total /= 5; 
            this.promedio = `El promedio total de los 5 numeros ingresados es de : ${total}`;
            this.limpiarCampos();
        }
    }
    

    limpiarCampos() {
        const ids = ['num1', 'num2', 'num3', 'num4', 'num5'];
        for (const item of ids) {
            this.shadowRoot.getElementById(item).value = '';
        }
    }
    
    
}
customElements.define('promedio-numeros', PromedioNumeros);
