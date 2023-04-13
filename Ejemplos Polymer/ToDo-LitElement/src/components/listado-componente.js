import { LitElement, html, css } from 'lit-element';
import '../components/input-componente';
import '../components/item-componente';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ListadoComponente extends LitElement {
    static get properties() {
        return {
            productos: { type: Array },
            query: { type: String },
            order: { type: String }
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.productos = [];
        this.order = 'asc';
        this.query = '';
    }

    static get styles() {
        return css`
            :host {
                display: block;
                margin: 15px 0;
                padding: 15px;
                border: 1px solid #009879;
                border-radius: 10px;
                font-family: sans-serif;
            }

            section {
            margin-left: 10px;
            }

            article {
            flex-grow: 1;
            }

            button {
                background-color: #009879;
                border-radius: 10px;
                border: 0;
                box-sizing: border-box;
                color: #eee;
                cursor: pointer;
                text-align: center;
            }

            div {
            border-radius: 10px;
            height: 30px;
            background-color: #eee;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            padding: 0 15px;
            }

            span {
            margin-right: 10px;
            }
        `
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
            <div>
                <article>
                    <button @click=${this.setFilterAsc}>Asc</button>
                    <button @click="${this.setFilterDesc}">Desc</button>
                </article>
                <span>Filtro:</span> <input type="text" @input="${this.changeFilter}">
            </div>
                ${this.getItems(this.productos, this.query, this.order).map((item) => html`
                <item-componente .producto=${item}></item-componente>`)
                }
        `;
    }

    getItems(productos, query, order) {
        return this.doOrder(this.doFilter(productos, query), order);
    }

    doFilter(productos, query) {
        if (productos) {
            return productos.filter(item => {
                if (!query) {
                    return true;
                }
                if (item.nombre.indexOf(query) != -1) {
                    return true;
                }
                return false;
            }); 
        }else {
            productos = [];
            return productos;
        }

    }

    setFilterAsc() {
        this.order = 'asc';
    }
    setFilterDesc() {
        this.order = 'desc';
    }

    changeFilter(e) {
        this.query = e.target.value;
    }

    doOrder(productos, order) {
        if(productos){
            return productos.sort((a, b) => {
                let nameA, nameB;
                if (order == 'asc') {
                    nameA = a?.nombre?.toLowerCase();
                    nameB = b?.nombre?.toLowerCase();
                } else {
                    nameB = a?.nombre?.toLowerCase();
                    nameA = b?.nombre?.toLowerCase();
                }
                if (nameA > nameB) {
                    return 1;
                }
                if (nameA < nameB) {
                    return -1;
                }
                return 0;
            });
        }
    }


}

customElements.define('listado-componente', ListadoComponente);