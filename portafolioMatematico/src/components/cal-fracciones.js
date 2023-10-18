import { LitElement, html, css } from 'lit-element';

export class CalFracciones extends LitElement {
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
                margin-bottom:2rem;
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
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
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
            .main{
                width: 35vw;
                height: 10vw;
                display: grid; 
                grid-template-columns: repeat(6, 1fr);
                margin-bottom: 2rem;
                padding-top: 5rem;
            }
            .one {
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-items:center;
                grid-column: 1 / 3;
                grid-row: 1/3;
                border-bottom: solid 1px #8C4B45;
                padding-bottom: .8rem;
                margin-right: 1rem;
            }
            .two {
                grid-column: 1 /3 ;
                grid-row: 3 / 7;
                display: flex;
                justify-content: center;
                align-items:start;
                padding-top: .8rem;
            }
            .three {
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-items:center;
                grid-column: 3/5;
                grid-row: 1/3;
                border-bottom: solid 1px #8C4B45;
                padding-bottom: .8rem;
                margin-right: 1rem;
            }
            .four {
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items:center;
                grid-column: 3/5;
                grid-row: 3/7;
                padding-top: .8rem;
                
            }
            .five {
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-items:center;
                grid-column: 5/7;
                grid-row: 1/3;
                border-bottom: solid 1px #8C4B45;
                padding-bottom: .8rem;
            }
            .six {
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items:center;
                grid-column: 5/7;
                grid-row: 3/7;
                padding-top: .8rem;
                
            }
            .valor{
                width: 7rem;
            }
            #operacion{
                width: 12rem;
            }
        `
    ];


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
