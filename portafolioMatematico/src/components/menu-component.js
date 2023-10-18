import { LitElement, html, css } from 'lit-element';

export class MenuComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                margin: 0;
                padding:0;
                font-family: sans-serif;
                font-size: 1rem;
                display:flex;
                justify-content: center;
            }
            .contenedor{
                width: 100vw;
                height: 6rem;
                border-bottom: 2px solid #8C4B45;
                display: flex;
                align-items: center;
                background-color: #4F5F73;
            }
            .titulo{
                width: 30vw;
                padding-left: 2rem;
                color: white;
            }

            .menu ul {
                list-style: none;
                display: flex;
                justify-content: space-around;
                width: 70vw;
                margin-right:3rem;
            }

            .opciones{
                border: 1px solid white;
                border-radius: 2rem;
                padding: .6rem;
                cursor: pointer;
                background-color: #8C4B45;
                color: white;
            }

            .opciones:hover{
                border: .3rem solid #8C4B45;
                background-color: white;
                color: #8C4B45;
            }

        `
    ];

    render() {
        return html`
            <div class="contenedor">
                <div class="titulo">
                    <h1>Portafolio matemático</h1>
                </div>
                <div class="menu">
                    <ul>
                        <li class="opciones" >Inicio</li>    
                        <li class="opciones" >suma/division</li>    
                        <li class="opciones" >fibonacci</li>    
                        <li class="opciones" >promedio</li>    
                        <li class="opciones" >tablas multiplicar</li>    
                        <li class="opciones" >fracciones</li>    
                        <li class="opciones" >pitagoras</li>    
                        <li class="opciones" >recatangulo</li>    
                        <li class="opciones" >cuadrado</li>    
                        <li class="opciones" >circulo</li>    
                        <li class="opciones" >adivino</li>    
                    </ul>
                </div>
            </div>
        `;
    }
}
customElements.define('menu-component', MenuComponent);
