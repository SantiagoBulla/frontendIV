import { LitElement, html, css } from 'lit';

export class EitComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
                border: .1rem solid black;
                padding: .5rem;
            }
            h2{
                color:red;
            }
            input{
                width: 2rem;
                font-size: 1.5rem;
                padding: .8rem;
            }

        `
    ];

    static properties = {
        counter: {
            type: Number,
            reflect: true
        }
    }

    constructor() {
        super();
        this.counter = 0;
    }

    render() {
        return html`
            <h2>Contador</h2>
            <p>${this.counter}</p>
            <input id="quantity" type="number" value="1"/>
            <button @click=${this.increment}>+1</button>
            <button @click=${this.decrement}> -1</button>
            
        `;
    }

    increment() {
        let quantity = this.shadowRoot.getElementById('quantity').value
        this.counter += parseInt(quantity);
    }

    decrement() {
        this.counter--;
    }
}
customElements.define('eit-component', EitComponent);

//host -> es la etiqueta padre donde se usa el componente <eit-component>