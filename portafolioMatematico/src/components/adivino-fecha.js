import { LitElement, html, css } from 'lit-element';

export class AdivinoFecha extends LitElement {
   
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
            .inputs{
                display: flex;
                justify-content: center;
                align-items: center;
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
            .campos label{
                text-align:center;
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
        edad: {
            type: String,
            reflect: true
        }

    } 
    constructor(){
        super();
        this.edad = 0;
    }

    render() {
        return html`
        <div class="contenedor">
                <div class="header">
                    <h3>ADIVINA ADIVINADOR</h3>
                    <div class="pantalla">${this.edad}</div>
                </div>
                <form>
                    <div class="inputs">
                        <div class="campos">
                            <label for="agno">Ingresa tu año de nacimiento</label>
                            <input type="number" id="agno" placeholder="YYYY" />
                        </div>
                    </div>
                    <div class="button">                    
                        <button type="button" @click=${this.limpiarPantalla}>LIMPIAR</button>
                        <button type="button" @click=${this.calcularDatos}>CALCULAR</button>
                        
                    </div>
                </form>
        </div>
        `;
    }


    calcularDatos() {
        const agnoUser = parseInt(this.shadowRoot.getElementById('agno').value);
        if (!isNaN(agnoUser)) { 
            let date = new Date();
            let agno = date.getFullYear();
            const edad = agno - agnoUser
            this.edad = `Actualmente usted tiene una edad de ${edad}`;
        }else{
            alert('Fecha incorrecta')
        }
    }

    
    limpiarPantalla() {
        this.edad = 0;
        this.shadowRoot.getElementById('agno').value =''
    }
}
customElements.define('adivino-fecha', AdivinoFecha);
