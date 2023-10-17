import { LitElement, html, css } from 'lit';

export class SumDiv extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('sum-div', SumDiv);
