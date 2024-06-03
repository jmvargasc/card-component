import { LitElement, html, css } from "lit";
import "../../components/card/card.js";
import "../../components/logout/logout.js";
import "../../components/buttonCard/buttonCard.js";
import "../../components/spinner/spinner.js";
import "../../components/modal/modal.js";
import "../../components/input/input.js";
import { GetInfoCharactersDm } from "../../components/get-info-characters-dm.js";

export class CardPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        height: 100%;
        padding: 1rem 0;
      }
      .container {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
      }
      .sliderButton {
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
      }
      .page {
        color: white;
      }
      #buscar {
        width: 30%;
        margin: 1rem 0;
      }
    `,
  ];

  static get properties() {
    return {
      response: { type: Array },
      page: { type: Number },
      loading: { type: Boolean },
      instancia: { type: Object },
      selectedItem: { type: Object },
      isModalOpen: { type: Boolean },
      count: { type: Number },
      error: { type: String },
    };
  }

  constructor() {
    super();
    this.response = [];
    this.page = 1;
    this.loading = true;
    this.instancia = new GetInfoCharactersDm();
    this.selectedItem = null;
    this.isModalOpen = false;
    this.count = 0;
    this.error = "";
  }

  firstUpdated() {
    super.firstUpdated();
    this.getApi();
  }

  async getApi() {
    this.loading = true;
    try {
      const valor = await this.instancia.getApi(this.page);
      this.response = valor.results;
      this.count = valor.info.pages;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  }

  next() {
    if (this.response.length === 0) return;
    this.page++;
    this.getApi();
  }

  prev() {
    if (this.page <= 1) return;
    this.page--;
    this.getApi();
  }

  async search() {
    const inputElement = this.shadowRoot.getElementById("buscar");
    if (
      inputElement.value &&
      inputElement.value <= this.count &&
      inputElement.value >= 1
    ) {
      this.page = parseInt(inputElement.value);
      this.getApi();
    } else {
      this.error = `Ingrese una pagina valida del 1 al ${this.count}`;
      this.isModalOpen = true;
      this.shadowRoot.getElementById("buscar").clearInput();
    }
  }

  onOpenModal(event) {
    this.selectedItem = event.detail.item;
    this.isModalOpen = true;
  }

  onCloseModal() {
    this.isModalOpen = false;
    this.selectedItem = null;
  }

  render() {
    return html`
      <div class="container">
        ${!this.loading
          ? html`
              <div class="page">
                <p>Página: ${this.page}</p>
              </div>
              <div class="search">
                <custom-input
                  typein="text"
                  placeholderin="Buscar"
                  id="buscar"
                  name="buscar"
                ></custom-input>
                <button-card-components
                  @click="${this.search}"
                  icon="${"Buscar"}"
                ></button-card-components>
              </div>
              <div class="sliderButton">
                <button-card-components
                  @click="${this.next}"
                  icon="${">"}"
                ></button-card-components>
                <button-card-components
                  @click="${this.prev}"
                  icon="${"<"}"
                ></button-card-components>
              </div>
              <card-components
                .items="${this.response}"
                .renderItem="${(item) => html`
                  <img src="${item.image}" alt="${item.name}" />
                  <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>Status: ${item.status} - ${item.species}</p>
                    <p>Última ubicación: ${item.location}</p>
                  </div>
                `}"
                @card-click="${this.onOpenModal}"
              ></card-components>
            `
          : html`<loading-spinner></loading-spinner>`}
        <modal-page
          type="api"
          .content="${this.selectedItem}"
          .open="${this.isModalOpen}"
          @close-modal="${this.onCloseModal}"
        ></modal-page>
      </div>
    `;
  }
}

customElements.define("card-page", CardPage);
