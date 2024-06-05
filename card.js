import { LitElement, html, css } from "lit-element";

export class CardComponents extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
      }
      .card {
        background-color: #3c3e44;
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s;
      }
      .card:hover {
        background-color: #8b38b5;
        cursor: pointer;
      }
      .card img {
        width: 100%;
        border-radius: 0.5rem;
      }
      .card-content {
        margin-top: 1rem;
      }
      .card-content h3 {
        margin: 0 0 1rem 0;
      }
      .card-content p {
        margin: 0;
        font-weight: bold;
      }
      span{
        color: #47d16e;
        font-weight:bold;
      }
    `,
  ];

  static get properties() {
    return {
      items: { type: Array },
      renderItem: { type: Function },
    };
  }

  constructor() {
    super();
    this.items = [];
    this.renderItem = null;
  }

  onCardClick(item) {
    const event = new CustomEvent('card-click', {
      detail: { item },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="card-container">
        ${this.items.map(
          (item) => html`
            <div class="card" @click="${() => this.onCardClick(item)}">
              ${this.renderItem ? this.renderItem(item) : html``}
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define("card-components", CardComponents);
