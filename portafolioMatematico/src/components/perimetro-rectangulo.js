import { LitElement, html, css } from 'lit-element';

export class PerimetroRectangulo extends LitElement {

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
                padding-bottom:2rem;
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
            .rectangulo {
                width: 400px;
                height: 200px;
                background-color: #4f81bd;
            }
            .main{
                width: 40vw;
                height: 20vw;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                padding-top:2rem;
            }
            .one {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items:end;
                grid-column: 1 / 3;
                grid-row: 1/2;
                gap:.5rem;
                /* border: solid 1px blue; */
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
            .one label{
                padding-right:1.8rem;
            }
            .two {
                grid-column: 3 / 7;
                grid-row: 1 / 2;
                display: flex;
                justify-content: center;
                align-items:center;
                /* border: solid 1px yellow; */
                padding-right:6rem;
                padding-left:1.5rem;
            }
            .four {
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items:center;
                grid-column: 1/7;
                grid-row: 2/3;
                gap: .5rem;
                padding-left: 10rem;
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

        `
    ];


    static properties = {
        perimetro: {
            type: String,
            reflect: true
        }
    }
    constructor(){
        super();
        this.perimetro = '0';
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>CALCULAR PERIMETRO DE UN RECTANGULO</h3>
                    <div class="pantalla">${this.perimetro}</div>
                </div>
                <form>
                    <div class="main">
                        <div class="one">
                            <label for="longitud"><em>Longitud</em></label>
                            <input type="number" id="longitud" placeholder="Largo (l)" />
                        </div>
                        <div class="two">
                            <div class="rectangulo"></div>
                        </div>
                        <div class="four">
                            <label for="ancho"><em>Ancho</em></label>
                            <input type="number" id="ancho" placeholder="Ancho (w)" />
                        </div>
                    </div>
                    <div class="button">
                        <button type="button" @click=${this.limpiarPantalla}>LIMPIAR</button>
                        <button type="button" @click=${this.calcularHipotenusa}>CALCULAR PERIMETRO</button>

                    </div>
                </form>
        </div>
        `;
    }

    calcularHipotenusa() {
        const longitud = parseInt(this.shadowRoot.getElementById('longitud').value);
        const ancho = parseInt(this.shadowRoot.getElementById('ancho').value);
        if ((longitud <= 0) || (ancho <= 0)) {
            alert('Los valores de la altura y la anchura del rectangulo deben ser valores positivos')
        }else if(!isNaN(longitud) && !isNaN(ancho)){
            const p = (2 * (longitud + ancho));
            this.perimetro = `El valor del perimetro con altura de ${longitud} y base de ${ancho} es: ${p}`;
        }else {
            alert('Los valores de la altura y la anchura del rectangulo son obligatorios')
        }
    }

    limpiarPantalla() {
        this.perimetro = 0;
        this.shadowRoot.getElementById('longitud').value = '';
        this.shadowRoot.getElementById('ancho').value = '';

    }
}
customElements.define('perimetro-rectangulo', PerimetroRectangulo);
