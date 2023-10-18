import { LitElement, html, css } from 'lit-element';

class MenuElement extends LitElement {

  static styles = css`
    /* Estilos del menú */
  `;

    static properties = {
        selectedOption: {
            type: String,
            reflect: true
        }
    }

  constructor(){
    super();
    this.selectedOption = '';
  }

  render() {
    return html`
      <ul>
        <li data-option="home" @click="${this.handleMenuItemClick}">Home</li>
        <li data-option="about" @click="${this.handleMenuItemClick}" >About</li>
        <li data-option="contact" @click="${this.handleMenuItemClick}">Contact</li>
      </ul>
    `;
  }

  handleMenuItemClick(event) {
    if (event.target.tagName === 'LI') {
      const selectedOption = event.target.getAttribute('data-option');
      this.selectedOption = selectedOption;
      this.dispatchEvent(new CustomEvent('menu-select', { detail: selectedOption }));
    }
  }
}

customElements.define('menu-element', MenuElement);
