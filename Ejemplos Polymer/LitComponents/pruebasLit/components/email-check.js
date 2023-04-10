import { LitElement, html, css } from 'lit-element';
import './subcomponent/input-bindeable';
import '../node_modules/@polymer/iron-icon/iron-icon';
import '../node_modules/@polymer/iron-icons/iron-icons';

export class EmailCheck extends LitElement {

    static get properties() {
        return {
            email: { type: String },
            icon: { type: String}
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.email = ''
        this.icon = 'icons:clear'
    }

    static styles = css`
            :host {
                display: block;
            }
            #email-check {
                background-color: rgb(161, 137, 105);
                border-radius: 5%;
                display:flex;
                height: 100px;
                width: 250px;
                align-items: center;
                margin-left: 20px;
                margin-right: 20px;
                margin-top: 20px;
            }
            #icon{
                height: 20px;
                width: 50px;
            }
            #input {
                margin-left: 20px;
            }
    `;

    render() {
        return html`
        <div id="email-check">
        <p>Validador de Email</p>
            <input-bindeable .value=${this.email} @change="${this.inputCambiado}"></input-bindeable>
            <iron-icon id="icon" icon="${this.icon}"></iron-icon>     
        </div>
        `;
    }

    comprobarEmail(email) {
        console.log(email);
        this.validateEmail(email) ? this.icon = 'icons:check': this.icon = 'icons:clear';
    }

    validateEmail(email) {
        let validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validateEmail.test(email);
    }

    inputCambiado(e) {
        this.email = e.detail;
        this.comprobarEmail(this.email);
      }
    
      resetTexto() {
        this.email = '';
      }
}
customElements.define('email-check', EmailCheck);