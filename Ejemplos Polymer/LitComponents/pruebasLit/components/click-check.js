import { LitElement, html, css } from 'lit-element';

export class ClickCheck extends LitElement {

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            status: { type: Boolean}
        };
    }

    constructor() {
        super();
        this.status = false;
    }

    static styles = css`
    :host {
        display: block;
    }
    #click-check {
                background-color: rgb(84, 133, 183);
                border-radius: 5%;

                height: 100px;
                width: 250px;
                margin-left: 20px;
                margin-right: 20px;
                margin-top: 40px;
            }

            button {
                margin-left: 20px;
                border: none;
            }

            .circle {
                background: rgb(38, 201, 38);
                border-radius: 50%;
                width: 25px;
                height: 25px;
                margin-left: 25px;
            }

            .nocircle {
                background: rgb(231, 107, 40);
                border-radius: 50%;
                width: 25px;
                height: 25px;
                margin-left: 25px;
            }

            #bottons-circle {
                display: flex;
                align-items: center;
                padding: 18px 0px 0px 0px;
            }

            .spinner {
                border: 4px solid rgba(0, 0, 0, .1);
                border-left-color: transparent;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-left: 100px;
                margin-top: 20px;

            }
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
    `;

    render() {
        return html`
            <div id="click-check">
                <div id="bottons-circle">
                    <button id="boton1" @click="${this.selectActive}">Activar</button>
                    <button id="boton2" @click="${this.selectDesactive}">Desactivar</button>
                    <div class="${ this.status ? 'circle' : 'nocircle' }" id="circulo"></div>
                </div>

                 ${this.status
                ? html`<div class='spinner' id="spinner"></div>`
                : ''}  
            </div>   
        `;
    }

    selectActive() {
        console.log("activado");
        this.status = true;
    }

    selectDesactive() {
        console.log("desactivado");
        this.status = false;
    }
}
customElements.define('click-check', ClickCheck);