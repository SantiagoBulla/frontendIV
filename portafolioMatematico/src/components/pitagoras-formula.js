import { LitElement, html, css } from 'lit-element';

export class PitagorasFormula extends LitElement {
   
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
            .triangulo {
                width: 0;
                height: 0;
                border-left: 0px solid transparent; /* Tamaño de la base del triángulo */
                border-right: 200px solid transparent; /* Tamaño de la base del triángulo */
                border-bottom: 180px solid #4f81bd; /* Tamaño de la altura del triángulo y color */
            }
            .main{
                width: 40vw;
                height: 20vw;
                display: grid; 
                grid-template-columns: repeat(6, 1fr);
                margin-bottom: 2rem;
                padding-top:2rem;
            }
            .one {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items:center;
                grid-column: 1 / 2;
                grid-row: 1/2;
                padding: 2rem;
                gap:.5rem;
            }
            .one input, .three input{
                width: 6rem;
                height: 1rem;
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
            .two {
                grid-column: 2 / 6;
                grid-row: 1 / 2;
                display: flex;
                justify-content: center;
                align-items:center;
            }
            .three {
                display: flex;
                flex-direction: column;
                justify-content: center;
                grid-column: 6/7;
                grid-row: 1/2;
                padding: 2rem;
                gap: .5rem;
            }
            .four {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items:center;
                grid-column: 1/7;
                grid-row: 2/3;
                gap: .5rem;
            }
            .four input{
                width: 13rem;
                height:1rem;
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
            #hiponusa{
                text-align: center;
                color: #344050;
            }
            
        `
    ];


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
        const a = (Math.pow(catetoA,2))
        const b = (Math.pow(catetoB,2))
        const hipo = a + b;
        const hipotenusas = Math.sqrt(hipo);
        this.value = hipotenusas;
        this.result = `El valor de la hipotenusa con catetos de ${catetoA} y ${catetoB} es: ${hipotenusas}`;
    }
    
    limpiarPantalla() {
        this.result = 0;
        this.value = ''
        this.shadowRoot.getElementById('catetoA').value = '';
        this.shadowRoot.getElementById('catetoB').value = '';
        
    }
}
customElements.define('pitagoras-formula', PitagorasFormula);
