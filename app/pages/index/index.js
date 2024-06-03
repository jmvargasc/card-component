import { LitElement, html, css } from 'lit';
import '../../components/nav/menu.js'; 
import '../../components/footer/footer.js';
import '../portafolio-page/portafolio-page.js';
import '../cards-pages/card-page.js';
import '../Js-Page/js-page.js';
import '../poo-page/poo-page.js';

export class Index extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
    `;

    static get properties() {
        return {
            page: { type: String }
        };
    }

    constructor() {
        super();
        this.page = 'portafolio'; 
        this.routes = [
            { path: 'portafolio', template: this.HomeTemplate },
            { path: 'card', template: this.CardTemplate },
            { path: 'js', template: this.JsTemplate },
            { path: 'poo', template: this.PooTemplate }
        ];
    }

    navigate(page) {
        this.page = page;
    }

    get HomeTemplate() {
        return html`<portafolio-page></portafolio-page>`;
    }

    get CardTemplate() {
        return html`<card-page></card-page>`;
    }

    get JsTemplate() {
        return html`<js-page></js-page>`;
    }

    get PooTemplate() {
        return html`<poo-page></poo-page>`;
    }

    render() {
        return html`
            <menu-page @navigate="${(e) => this.navigate(e.detail.path)}"></menu-page>
            <div class="container">
                ${this.routes.map(route => {
                    if (route.path === this.page) {
                        return route.template;
                    }
                })}
            </div>
            <footer-page></footer-page>
        `;
    }
}

customElements.define('index-page', Index);
