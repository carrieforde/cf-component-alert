import { LitElement, html, css } from 'lit-element';
import * as cfIcons from './cf-icons';

class CfAlert extends LitElement {

    static get styles() {
        return css`
            :host {
                background-color: var(--alert-bg-default, #f0f4f8);
                display: block;
                color: var(--alert-color-default, #334e68);
                padding: 12px 24px;
            }

            :host([type="info"]) {
                background-color: var(--alert-bg-info, #e3f8ff);
                color: var(--alert-color-info, #035388);
            }

            :host([type="tip"]),
            :host([type="success"]) {
                background-color: var(--alert-bg-tip, #effcf6);
                color: var(--alert-color-tip, #014d40);
            }

            :host([type="warning"]) {
                background-color: var(--alert-bg-warning, #fffbea);
                color: var(--alert-color-warning, #8d2b0b);
            }

            :host([type="danger"]) {
                background-color: var(--alert-bg-danger, #ffe3e3);
                color: var(--alert-color-danger, #610316);
            }

            span {
                float: left;
                margin-right: 8px;
                text-align: center;
                vertical-align: middle;
                width: 1rem;
            }

            :host([type="tip"]) svg {
                width: 75%;
            }

            svg {
                max-width: 100%;
            }
        `;
    }

    static get properties() {
        return {
            type: { type: String }
        }
    }

    constructor() {
        super();

        this.type = '';
    }

    render() {
        return html`
            ${cfIcons[this.type] ? html`<span>${cfIcons[this.type]}</span>` : null}
            <slot></slot>
        `;
    }
}

customElements.define('cf-alert', CfAlert);
