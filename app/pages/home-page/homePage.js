import { LitElement, html, css } from "lit";

import "../../components/login/login.js";
import "../../components/singUp/singUp.js";
import "../../components/header/header.js";
import "../../components/bgMain/bgMain.js";

import "../index/index.js";

export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100vh;
    }

    main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        349deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(191, 10, 215, 1) 51%,
        rgba(126, 33, 209, 1) 100%
      );
      height: 100%;
    }

    .main_login {
      width: 80%;
      margin: 0 auto;
      color: white;
      padding-top: 5rem;
    }
    @media only screen and (max-width: 1032px) {
      main {
        display: flex;
        flex-direction: column;
      }
      .img_everything {
        height: 32%;
      }
      .main_login {
        padding: 0rem;
      }
      .img_everything .title {
        width: 100%;
      }
      .img_everything .title h2 {
        font-size: 1.5rem;
      }
    }
  `;

  static properties = {
    //variables
    title: { type: String },
    loggedIn: { type: Boolean }
  };

  constructor() {
    super();
    this.loggedIn = true;
  }

  firstUpdated() {
    this.addEventListener('login', () => {
      this.loggedIn = true;
    });
  }

 
  render() {
    return html`
    ${!this.loggedIn ? html `
    <main>
        <col-img title="${this.title}" quote="You can get everything you want if you work hard, trust the process, and stick to the plan."></col-img>
        <div class="main_login">
          <header-page></header-page>
          <login-page></login-page>
          <singup-page></singup-page>
        </div>
      </main>
    
    
    `: html `<index-page></index-page>`}
    `;
  }
}
customElements.define("home-page", HomePage);
