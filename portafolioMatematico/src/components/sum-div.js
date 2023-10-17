import { LitElement, html, css } from 'lit-element';

export class SumDiv extends LitElement {
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
            }
        `
    ];

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>SUMA Y DIVIDE</h3>
                    <div class="pantalla">0</div>
                </div>
                <form>
                    <div class="campos">
                        <label for="num1">Ingresa el primer numero</label>
                        <input type="number" id="num1" placeholder="Digite un numero a sumar" required/>
                    </div>
                    <div class="campos">
                        <label for="num2">Ingresa el segundo numero</label>
                        <input type="number" id="num2" placeholder="Digite un numero a sumar" required/>
                    </div>
                    <div class="campos">
                        <label for="num3">Ingresa el tercer numero</label>
                        <input type="number" id="num3" placeholder="Digite un numero a sumar" required/>
                    </div>
                    <div class="campos">
                        <label for="num4">Ingresa el cuarto numero</label>
                        <input type="number" id="num4" placeholder="Digite un numero a sumar" required/>
                    </div>
                    <div class="campos">
                        <label for="num5">Ingresa el quinto numero</label>
                        <input type="number" id="num5" placeholder="Digite un numero a sumar" required/>
                    </div>
                    <div class="campos">
                        <label for="numDiv">¿En cuanto lo quieres dividir?</label>
                        <input type="number" id="numDiv" placeholder="Digite un numero a sumar" required/>
                    </div>
                </form>
                <div class="button">                    
                    <button type="button">CALCULAR</button>
                </div>
        </div>
        `;
    }
}
customElements.define('sum-div', SumDiv);
