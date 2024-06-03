import { LitElement, html, css } from "lit";

export class Footer extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        background-color: rgb(66, 66, 66);
        color: white;
      }
      p{
        margin:0;
      }
      .container {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
      }
    `,
  ];

  render() {
    return html`
      <footer>
       <div class="container">
        <p>Curso de CELLS</p>
        <span>Dev</span>
       </div>
      </footer>
    `;
  }
}
customElements.define("footer-page", Footer);
