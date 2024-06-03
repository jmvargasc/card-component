import { LitElement, html, css } from 'lit';

export class SimpleGreeting extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <h1>Hola</h1>
    `;
  }
}
customElements.define('hola-page', SimpleGreeting);
