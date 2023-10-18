import { LitElement, html, css } from 'lit-element';

export class AreaCuadrado extends LitElement {
    
   
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
            .cuadrado {
                width: 15rem;
                height: 15rem;
                background-color: #4f81bd;
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
