import { LitElement, html, css } from 'lit';

export class Logout extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            button{
               border:none;
                background-color:black;
                color:white;
                padding:0.5rem 1rem;
                font-weight:bold;
                cursor:pointer;
            }
        `
    ];

    render() {
        return html`
        
        <button>Logout</button>
        
        `;
    }
}
customElements.define('logout-components', Logout);
