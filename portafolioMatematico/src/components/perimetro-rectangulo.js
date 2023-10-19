import { LitElement, html } from 'lit-element';
import perimetroRectanguloStyle from '../css/perimetro-rectanguloStyle';

export class PerimetroRectangulo extends LitElement {

    static get styles(){
        return[perimetroRectanguloStyle]
    }

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
