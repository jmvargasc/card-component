import { LitElement, html, css } from "lit";

export class Button extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      button[type="submit"] {
        width: 100%;
        background-color: black;
        color: white;
        border: none;
        padding: 15px;
        border-radius: 20px;
        font-size: 15px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button[type="submit"]:hover {
        background-color: #9008ab;
        color: white;
      }


      button[disabled] {
      background-color: #a97bf7;
      color: white;
      cursor: not-allowed;
    }

    button[disabled]:hover {
      background-color: #a97bf7;
    }
    `,
  ];

  static get properties() {
    return {
      value: { type: String },
      disabled: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.disabled = true; 
  }

  render() {
    return html`<button type="submit" ?disabled=${this.disabled}> ${this.value} </button>`;
  }
}
customElements.define("button-page", Button);
