import { LitElement, html, css } from 'lit';

export class LoadingSpinner extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center
      }

      .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: spin 2s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
  ];

  render() {
    return html`
      <div class="spinner"></div>
    `;
  }
}

customElements.define('loading-spinner', LoadingSpinner);