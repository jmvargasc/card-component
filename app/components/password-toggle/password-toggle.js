import { LitElement, html, css } from 'lit';

export class PasswordToggle extends LitElement {
  static styles = css`
   
  `;

  static get properties() {
    return {
      isVisible: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.isVisible = false;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.dispatchEvent(new CustomEvent('password-toggled', { detail: this.isVisible, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="password-toggle" @click=${this.toggleVisibility}>
        <div class="toggle-icon">
          <img src="${this.isVisible ? './app/source/img/eyeclose.png' : './app/source/img/eye.png'}" alt="" />
        </div>
      </div>
    `;
  }
}

customElements.define('password-toggle', PasswordToggle);