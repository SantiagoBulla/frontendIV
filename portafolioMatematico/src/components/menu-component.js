import { LitElement, html } from 'lit-element';
import menuComponentStyle from '../css/menu-componentStyle.js';
import { SumDiv } from "./sum-div.js";
import { SecuenciaFibonacci } from "./secuencia-fibonacci.js";
import { PromedioNumeros } from "./promedio-numeros.js";
import { TablasMultiplicar } from "./tablas-multiplicar.js";
import { CalFracciones } from "./cal-fracciones.js";
import { PitagorasFormula } from "./pitagoras-formula.js";
import { PerimetroRectangulo } from "./perimetro-rectangulo.js";
import { AreaCuadrado } from "./area-cuadrado.js";
import { AreaCirculo } from "./area-circulo.js";
import { AdivinoFecha } from "./adivino-fecha.js";

export class MenuComponent extends LitElement {
    static get styles(){
        return [menuComponentStyle]
    }

    render() {
        return html`
            <div class="contenedor-header">
                <div class="titulo">
                    <h1>Portafolio matemático</h1>
                </div>
                <div class="menu">
                    <ul>
                        <li class="opciones" @click=${()=>this.renderizarComponente('op0')}>Inicio</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op1')}>suma/division</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op2')}>fibonacci</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op3')}>promedio</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op4')}>tablas multiplicar</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op5')}>fracciones</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op6')}>pitagoras</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op7')}>recatangulo</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op8')}>cuadrado</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op9')}>circulo</li>    
                        <li class="opciones" @click=${()=>this.renderizarComponente('op10')}>adivino</li>    
                    </ul>
                </div>
            </div>

            <div class="contenedor-body">
                <div class="main">
                    <h1>BIENVENIDO AL SISTEMA</h1>
                </div>
            </div>
        `;
    }

    renderizarComponente(componentOption){
        const mainDiv = this.shadowRoot.querySelector('.main');
        switch (componentOption) {
            case 'op0':
                mainDiv.innerHTML = '<h1>BIENVENIDO AL SISTEMA</h1>';
                break;
            case 'op1':
                mainDiv.innerHTML = '<sum-div></sum-div>';
                break;
            case 'op2':
                mainDiv.innerHTML = '<secuencia-fibonacci></secuencia-fibonacci>';
                break;
            case 'op3':
                mainDiv.innerHTML = '<promedio-numeros></promedio-numeros>';
                break;
            case 'op4':
                mainDiv.innerHTML = '<tablas-multiplicar></tablas-multiplicar>';
                break;
            case 'op5':
                mainDiv.innerHTML = '<cal-fracciones></cal-fracciones>';
                break;
            case 'op6':
                mainDiv.innerHTML = '<pitagoras-formula></pitagoras-formula>';
                break;
            case 'op7':
                mainDiv.innerHTML = '<perimetro-rectangulo></perimetro-rectangulo>';
                break;
            case 'op8':
                mainDiv.innerHTML = '<area-cuadrado></area-cuadrado>';
                break;
            case 'op9':
                mainDiv.innerHTML = '<area-circulo></area-circulo>';
                break;
            case 'op10':
                mainDiv.innerHTML = '<adivino-fecha></adivino-fecha>';
                break;        
            default:
                break;
        }

    }
}
customElements.define('menu-component', MenuComponent);
