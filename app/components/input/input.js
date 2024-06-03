import { LitElement, html, css } from "lit";

export class Input extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      input {
        width: 100%;
        border: none;
        border-radius: 10px;
        background-color: #ffffff;
        padding: 15px 10px;
        margin-top: 10px;
      }
    `,
  ];

  constructor() {
    super();
    this.typeIn = 'text'; 
    this.placeholderIn = '';
    this.id = '';
  }

  static get properties() {
    return {
        typeIn: { type: String,attribute:'typein' },
        placeholderIn:{ type: String,attribute:'placeholderin' },
        id:{ type: String },
        name:{type:String},
        
    };
  }

  clearInput() {
    this.shadowRoot.getElementById(this.id).value = '';
  }

  render() {
    return html`
      <input
        type="${this.typeIn}"
        placeholder="${this.placeholderIn}"
        id="${this.id}"
        name="${this.name}"
        @input="${this.inputValue}"
      />
    `;
  }

  inputValue(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent(`${this.name}Changed`, { detail: this.value, bubbles: true, composed: true }));
  }
}
customElements.define("custom-input", Input);
