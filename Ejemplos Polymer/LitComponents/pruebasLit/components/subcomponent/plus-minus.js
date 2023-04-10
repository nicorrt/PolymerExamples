import {LitElement, html, css} from 'lit-element';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PlusMinus extends LitElement {
    static get properties() {
        return {
            label: { type: String},
            datos: { type: Number},
            maxValue: {type: Number},
            minValue: {type: Number}
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.label = '';
        this.datos = 0;
        this.maxValue = 0;
        this.minValue = 0;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            #plus-minus-item {
                border-radius: 5%;
                display:block;
                align-items: center;
            }   
        `;
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
        <div id="plus-minus-item">
            <header>${this.label}</header>
            <div>
                <button @click="${this.aumentarDatos}">+</button>
                <span>${this.datos}</span>
                <button @click="${this.disminuirDatos}">-</button>
            </div>
        </div>
        `;
    }

    aumentarDatos() {
        this.dispatchEvent(new CustomEvent('enviarDatos', {
            detail: {datos: this.datos + 10, max: this.maxValue, min: this.minValue, label: this.label},
            bubbles: true,
            composed: true
        }));
    }

    disminuirDatos() {
        this.dispatchEvent(new CustomEvent('enviarDatos', {
            detail: {datos: this.datos - 10, max: this.maxValue, min: this.minValue, label: this.label},
            bubbles: true,
            composed: true
        }));
    }

}

customElements.define('plus-minus', PlusMinus);