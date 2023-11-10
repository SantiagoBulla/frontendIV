import { LitElement, html, css } from 'lit-element';

export class PruebaPg extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            h1{
                color: red;
            }
        `
    ];

    render() {
        return html`
            <h1>redireccion</h1>
        `;
    }
}
customElements.define('prueba-pg', PruebaPg);
