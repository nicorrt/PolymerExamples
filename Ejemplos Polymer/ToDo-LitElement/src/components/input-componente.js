import { LitElement, html, css } from 'lit-element';

export class InputComponente extends LitElement {

    static get styles() {
        return css`
          :host {
            display: block;
            margin-bottom: 12px;
          }
          label {
            display: block;
            margin-bottom: 4px;
            color: #009879;
          }
          input {
            box-sizing: border-box;
            border-radius: 5px;
            border: 1px solid #009879;
            font-size: 1em;
            padding: 5px;
            width: 100%;
          }
          input:focus {
            outline: none;
            border-color: #6af
          }
          input::placeholder {
            color: #ccc;
          }
          input:disabled {
            background-color: #f5f5f5;
            border-color: #eee;
          }
        `;
    }

    constructor() {
        super();
        this.disabled = false;
        this.placeholder = '';
        this.label = '';
        this.value = '';
    }

    static get properties() {
        return {
            label: { type: String },
            placeholder: { type: String },
            disabled: { type: Boolean },
            value: { type: String }
        }
    }

    render() {
        return html`
        <div>
          ${ this.label 
            ? html`<label for="textField">${this.label}</label>`
            : ''}  
            <input 
                type="text" 
                placeholder="${this.placeholder}" 
                ?disabled="${this.disabled}" 
                @keypress="${this.lookForEnter}"
                @input="${this._input}"
                .value="${this.computeValue(this.value)}">
        </div>

        `;
    }

    lookForEnter(e) {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            this.dispatchEvent(new CustomEvent('enter-pressed'));
        }
    }

    _input(e) {
        this.value = e.target.value;
    }

    computeValue(value) {
        return value;
      }
}
customElements.define('input-componente', InputComponente);