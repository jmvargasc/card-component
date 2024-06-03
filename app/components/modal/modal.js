import { LitElement, html, css } from "lit";

export class Modal extends LitElement {
  static styles = css`
    :host {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }
    ul {
      margin: 0;
      padding: 0;
    }
    ul li {
      margin: 0.5rem 0;
    }

    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 50%;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    .modal-container {
      display: flex;
      gap: 1rem;
    }
    .error {
      text-align: center;
    }
  `;

  static get properties() {
    return {
      item: { type: Object },
      open: { type: Boolean },
      error: { type: String },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.content = null;
    this.open = false;
    this.type = "";
  }

  updated() {
    this.style.display = this.open ? "block" : "none";
  }

  Close() {
    this.dispatchEvent(
      new CustomEvent("close-modal", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <div class="modal-content">
        <span class="close" @click="${this.Close}">&times;</span>
        ${this.content !== null
          ? html`
              <div class="modal-container">
                ${this.renderContent(this.content)}
              </div>
            `
          : html`<p>No hay contenido para mostrar</p>`}
      </div>
    `;
  }

  renderContent(content) {
    const type = this.type;
    if (type === "api") {
      return html`
        <div class="img-modal">
          <img src="${content.image}" alt="${content.name}" />
        </div>
        <div class="info-modal">
          <h2>${content.name}</h2>
          <p>Estatus: ${content.status} - ${content.species}</p>
          <p>Origen: ${content.origin}</p>
          <p>Última localización: ${content.location}</p>
          <p>Género: ${content.gender}</p>
          <p>Creado: ${content.created}</p>
          <p>Episodios: ${content.episode.length}</p>
        </div>
      `;
    } else if (type === "personal") {
      return html`
        <div class="info-modal">
          <h2>${content.name}</h2>
          <p>Posición: ${content.position}</p>
          <p>Fecha: ${content.date}</p>
          ${content.funciones
            ? html`
                <h3>Funciones:</h3>
                <ul>
                  ${content.funciones.map(
                    (funcion) => html`<li>${funcion}</li>`
                  )}
                </ul>
              `
            : ""}
        </div>
      `;
    } else if (type === "code") {
      return html`
        <div class="info-modal">
          <h2>Solucion</h2>
          <code>${content.type}</code>
        </div>
      `;
    } else {
      return html`<p>Tipo de contenido no compatible</p>`;
    }
  }
}

customElements.define("modal-page", Modal);
