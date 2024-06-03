import { LitElement, html, css } from "lit";

export class Menu extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    h1 {
      margin: 0 1rem 0 0;
      padding: 0;
    }
    a {
      text-decoration: none;
      color: black;
      margin: 0 0.5rem;
      padding-bottom: 0.5rem;
      display: inline-block;
    }

    .navbar {
      background-color: white;
      display: flex;
      align-items: center;
      padding: 1rem;
    }

    .navbar-nav {
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }

    .nav-item {
      margin: 0.5rem 0;
    }

    .nav-link {
      display: block;
      padding: 0.5rem 1rem;
      color: rgba(0, 0, 0, 0.5);
      text-decoration: none;
    }

    
    
  `;

  static get properties() {
    return {
      menu: { type: Array },
    };
  }

  constructor() {
    super();
    this.menu = [
      { name: "Home", page: "portafolio" },
      { name: "Lit", page: "card" },
      { name: "JS", page: "js" },
      { name: "POO", page: "poo" },
    ];
  }

  render() {
    return html`
      <nav class="navbar">
        <h1 class="navbar-brand">CELLS</h1>
        <div class="collapse">
          <ul class="navbar-nav">
            ${this.menu.map(
              (item, index) => html`
                <li class="nav-item">
                  <a
                    href="#"
                    @click="${() =>
                      this.dispatchEvent(
                        new CustomEvent("navigate", {
                          detail: { path: item.page },
                        })
                      )}"
                  >
                    ${item.name}
                  </a>
                </li>
              `
            )}
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("menu-page", Menu);
