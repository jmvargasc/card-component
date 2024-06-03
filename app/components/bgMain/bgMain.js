import { LitElement, html, css } from 'lit';

export class ColImg extends LitElement {
  static styles = css`
    :host {
      background-image: url("./app/source/img/Fluid_Pink_Blue.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem 1rem;
    }
    h1,
    h2,
    h3,
    p {
      margin: 0;
    }
    .subTitle {
      position: relative;
    }
    .subTitle::after {
      content: "";
      width: 20%;
      height: 1px;
      position: absolute;
      top: 9px;
      left: 126px;
      background-color: white;
    }
    .title {
      width: 40%;
    }
    .title h2 {
      font-size: 3rem;
    }
  `;

  static get properties() {
    return {
      title: { type: String },
      quote: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.quote = '';
  }

  render() {
    return html`
      <div class="subTitle">
        <p>A WISE QUOTE</p>
      </div>
      <div class="title">
        <h2>${this.title}</h2>
        <span>${this.quote}</span>
      </div>
    `;
  }
}

customElements.define('col-img', ColImg);