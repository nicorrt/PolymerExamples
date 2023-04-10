import {LitElement, html, css} from 'lit-element';
import '../node_modules/lit-toast/lit-toast';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class AddArray extends LitElement {
    static get properties() {
        return {
            valores: { type: Array},
            valor: { type: String}
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.valores = [];
        this.valor = '';
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            #add-array {
                background-color: rgb(208, 217, 79);
                border-radius: 5%;
                display: flex;
                flex-direction: column;
                height: 200px;
                width: 250px;
                align-items: center;
                margin-left: 20px;
                margin-right: 20px;
                margin-top: 20px;
            }

            button {
                display: flex;
                border-radius: 4px;
                background-color: #c55a3a;
                border: none;
                color: #FFFFFF;
                text-align: center;
                font-size: 12px;
                padding: 20px;
                transition: all 0.5s;
                cursor: pointer;
                margin: 20px;
            }

            #boton-div {
                display: flex;
            }

            #input {
                margin-top: 20px;
                margin-left: 30px;
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
        <div id="add-array">
            <input-bindeable id="input" label="Añade un valor numérico" .value="${this.valor}" @change="${this.inputCambiado}"></input-bindeable>
            <div id="boton-div">
                <button @click="${this.anadir}" id="botonAddOne">Añadir un elemento</button>
                <button @click="${this.anadirTres}" id="botonAddThree">Añadir tres elementos</button>
                <lit-toast></lit-toast>
            </div>
        </div>
        `;
    }

    anadir() {
        console.log(this.valor);
        let valorAnadido = parseInt(this.valor);
        console.log(valorAnadido);
        if (!isNaN(valorAnadido)) {
            console.log('agrego valor', valorAnadido);
            this.valores.push(valorAnadido);
        }else{
            this._showToast(); 
        }
        this.valor = "";
    }

    inputCambiado(e) {
        this.valor = e.detail;
      }

    anadirTres() {
        this.valores.push(1, 2, 3);
    }

    _showToast() {
        console.log("toast");
        this.shadowRoot.querySelector('lit-toast').show("Es necesario escribir un número", 2500);
      }

}

customElements.define('add-array', AddArray);