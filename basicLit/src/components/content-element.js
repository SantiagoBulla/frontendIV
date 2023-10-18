import { LitElement, html, css } from 'lit-element';

class HomeContent extends LitElement {
  static styles = css`
    /* Estilos para el contenido de inicio */
  `;

  render() {
    return html`
      <div>Contenido de la página de inicio</div>
    `;
  }
}

class AboutContent extends LitElement {
  static styles = css`
    /* Estilos para la página "Acerca de" */
  `;

  render() {
    return html`
      <div>Contenido de la página "Acerca de"</div>
    `;
  }
}

class ContactContent extends LitElement {
  static styles = css`
    /* Estilos para la página de contacto */
  `;

  render() {
    return html`
      <div>Contenido de la página de contacto</div>
    `;
  }
}

customElements.define('home-content', HomeContent);
customElements.define('about-content', AboutContent);
customElements.define('contact-content', ContactContent);
