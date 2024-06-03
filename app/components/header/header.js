import { LitElement, html, css } from "lit";

export class Header extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        text-align:center;
      }
      
       .login-title h1 {
        font-size: 2.5rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="login-title">
        <h1>Welcome Back</h1>
        <span>Enter your email and password to access your account</span>
      </div>
    `;
  }
}
customElements.define("header-page", Header);
