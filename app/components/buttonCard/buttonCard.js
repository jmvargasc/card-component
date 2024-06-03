import { LitElement, html, css } from 'lit';

export class ButtonCard extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }

      button {
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #2980b9;
      }

      button:disabled {
        background-color: #bdc3c7;
        cursor: not-allowed;
      }
    `
  ];

  static get properties() {
    return {
      icon: { type: String },
    };
  }

  render() {
    return html`
      <button >${this.icon}</button>
    `;
  }
}

customElements.define('button-card-components', ButtonCard);