import { LitElement, html, css } from "lit";

export class SingUP extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      .create_account {
        color: white;
        margin: 1rem 0;
        text-align: right;
        margin-top: 1rem;
      }

      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    `,
  ];

  render() {
    return html`
      <div class="create_account">
        <p>Don’t have an account? <a href="#"> Sign Up</a></p>
      </div>
    `;
  }
}
customElements.define("singup-page", SingUP);
