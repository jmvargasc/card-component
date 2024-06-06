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
        background-color: #888888;
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s;
      }
      .card:hover {
        background-color: #4749d1;
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
        color: #4749d1;
        font-weight:bold;
      }
    `,
  ];

  static get properties() {
    return {
      items: { type: Array },
      renderItem: { type: Function },
      title: {type: String},
      icon: {type: String},
    };
  }



  constructor() {
    super();
    this.items = [{
      name: "nombre",
      Description: "ndjscndo iancd oinvcoi dsonoidv nfovnfov nfoinvoi dnoincodsnoisd",
    }];
    this.renderItem = null;

    this.title = 'No title';
    this.icon = undefined;
    
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
            <div class="card" id="card" @click="${() => this.onCardClick(item)}">
              ${this.renderItem ? this.renderItem(item) : html``}
            </div>
          `
        )}
      </div>
    `;
  }

  connectedCallback(){
    super.connectedCallback();
    this.shadowRoot.querySelector('#card');
    this.style.padding = "4rem";

    console.log("connetced card");
  }

  firstUpdated() {
    this.shadowRoot.querySelector('#card').focus();
    this.style.fontSize = "4rem";

    console.log("first card");

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.shadowRoot.querySelector('#card');
    this.style.fontFamily = "Helvetica";

    console.log("disconnected card");
  }

  updated() {
    this.shadowRoot.querySelector('#card');
    this.style.fontWeight = "bold";

    console.log("update card");
  }

}
customElements.define("card-components", CardComponents);

