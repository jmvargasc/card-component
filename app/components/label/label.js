import { LitElement, html, css } from 'lit';

export class CustomLabel extends LitElement {
    static properties = {
        for: { type: String }
    };

    static styles = [
        css`
            :host {
                display: block;
            }

            label{
                font-weight:bold;
            }
        `
    ];

    constructor() {
        super();
        this.for = '';
    }

    render() {
        return html`
            <label for="${this.for}">
                <slot></slot>
            </label>
        `;
    }
}

customElements.define('custom-label', CustomLabel);