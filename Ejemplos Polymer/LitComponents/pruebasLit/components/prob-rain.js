import { LitElement, html, css } from 'lit-element';
import '../components/subcomponent/plus-minus';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ProbRain extends LitElement {
    static get properties() {
        return {
            tiempo: { type: Object },
            probabilidad: { type: String }
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.tiempo = {
            presion: 920,
            humedad: 80
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            #prob-rain {
                background-color: rgb(60, 88, 202);
                border-radius: 5%;
                display: flex;
                flex-direction: column;
                height: 150px;
                width: 250px;
                align-items: center;
                margin-left: 20px;
                margin-right: 20px;
                margin-top: 20px;
            }

            #plus-minus {
                background-color: rgb(90, 169, 209);
                border-radius: 5%;
                display: grid;
                flex-direction: column;
                height: 150px;
                width: 150px;
                align-items: center;
                margin-left: 20px;
                margin-right: 20px;
                margin-top: 10px;
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
        <div id="prob-rain">
            <div id="plus-minus">
                <plus-minus label="Presión atmosférica" .datos="${this.tiempo.presion}" minValue="900"
                    maxValue="1060"></plus-minus>
                <plus-minus label="Humedad en %" .datos="${this.tiempo.humedad}" minValue="0" maxValue="100"></plus-minus>
            </div>
            <div>
                <span>Probabilidad de lluvia</span>
                <div>${this.valorInsertado(this.tiempo)}</div>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this._event = this.addEventListener('enviarDatos', this.depurarDatos.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('enviarDatos', this._event)
        super.disconnectedCallback();
    }

    valorInsertado(tiempo) {
        if (tiempo.presion < 900 || tiempo.humedad < 30) {
            this.probabilidad = 'Baja';
        } else if (tiempo.presion < 950 || tiempo.humedad < 50) {
            this.probabilidad = 'Media';
        } else if (tiempo.presion < 1000 || tiempo.humedad < 70) {
            this.probabilidad = 'Alta';
        } else {
            this.probabilidad = 'Muy alta';
        }
        return this.probabilidad;
    }

    depurarDatos({ detail } = {}) {
        if (detail.datos <= detail.max && detail.datos >= detail.min) {
            if (detail.label === 'Presión atmosférica')
            //forma 1
                this.tiempo.presion = detail.datos;
                this.requestUpdate();
            if (detail.label === 'Humedad en %')
            //forma 2
                this.tiempo = {
                    ...this.tiempo,
                    humedad: detail.datos
                }
        } else {
            return;
        }
    }


}

customElements.define('prob-rain', ProbRain);