import { LitElement, html, css } from "lit";
import '../button/button.js';
import '../input/input.js';
import '../label/label.js';
import '../password-toggle/password-toggle.js'

export class Login extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .form_login form .form {
        margin: 2rem 0;
      }
      .recordar_input {
        text-align: end;
        margin-bottom: 1rem;
      }
      .fm-password {
        position: relative;
        cursor: pointer;
      }
      .fm-password .showPass {
        position: absolute;
        top: 28px;
        right: 0;
      }
    `
  ];

  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
      validForm: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.email = "";
    this.password = "";
    this.validForm = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('emailChanged', this.handleEmailChange.bind(this));
    this.addEventListener('passwordChanged', this.handlePasswordChange.bind(this));
    this.addEventListener('password-toggled', this.seePassword.bind(this));
  }

  handleEmailChange(e) {
    this.email = e.detail;
    this.FormValid();
    this.ButtonValid();
  }
  
  handlePasswordChange(e) {
    this.password = e.detail;
    this.FormValid();
    this.ButtonValid();
  }

  FormValid() {
    this.validForm = this.email.trim() !== '' && this.password.trim() !== '';
  }

  ButtonValid() {
    const buttonElement = this.shadowRoot.querySelector('button-page');
    buttonElement.disabled = !this.validForm;
  }

  onSubmit() {
    if (this.email !== "test@test.com" || this.password !== "123") {
      alert('Error de cuenta');
      return;
    }
    this.dispatchEvent(new CustomEvent('login', { bubbles: true, composed: true }));
  }

  seePassword(event) {
    const isVisible = event.detail;
    const passwordInput = this.shadowRoot.querySelector('#password');
    if (passwordInput) {
      passwordInput.typeIn = isVisible ? 'text' : 'password';
    }
  }

  render() {
    return html`
      <div class="form_login">
        <form >
          <div class="form">
            <custom-label for="email">Email</custom-label>
            <custom-input typein="email" placeholderin="test@test.com" id="email" name="email"></custom-input>
          </div>
          <div class="form fm-password">
            <custom-label for="password">Password</custom-label>
            <custom-input typein="password" placeholderIn="123" id="password" name="password"></custom-input>
            <div class="showPass">
               <password-toggle></password-toggle>
            </div>
            
          </div>
          <button-page value="Sign In" @click=${this.onSubmit} ?disabled=${!this.validForm}></button-page>
        </form>
      </div>
    `;
  }
}

customElements.define("login-page", Login);