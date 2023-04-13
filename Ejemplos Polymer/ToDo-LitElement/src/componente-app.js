import { LitElement, html, css } from 'lit-element';
import './components/listado-componente';
import './components/crear-componente';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ComponenteApp extends LitElement {
    static get properties() {
        return {
            listaDeseos: { type: Array },
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.listaDeseos = [
            {
                nombre: 'Camiseta',
                id: 0,
                precio: 8,
                cantidad: 2,
                imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkShBAXpPy8CaIds3eR3MM5m8OFfdYuy5k9UCwE5N1EEXVVu3etWcI5Xy2nFVtOnDSSV9QOo1VgDA&usqp=CAc',
                descripcion: 'camiseta corta',
                completed: false
            },
            {
                nombre: 'Guitarra',
                id: 1,
                precio: 20.13,
                cantidad: 1,
                imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSCEBYZyl6rvBWxm0-YRts22mb4ib9qcIKhIn_0JqLK5u8rUcjWCJ3ZtQn9B84IesYCEjmvMsAjPbRvdIpS2TlDmoTfzgrhoecgUMUSuj4&usqp=CAc',
                descripcion: 'guitarra eléctrica',
                completed: false
            },
        ];
    }

    static get styles() {
        return css`
        :host {
			display: block;
			padding: 15px;
		}
        h1 {
            
            text-align: center;
            text-transform: uppercase;
            background-image: linear-gradient(
                -225deg,
                #231557 0%,
                #009879 29%,
                #ff1361 67%,
                #009879 100%
            );

            background-size: 200% auto;
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: textclip 2s linear infinite;
            display: inline-block;
            font-size: 30px;
        }

        
        @keyframes textclip {
        to {
            background-position: 200% center;
        }
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
        <h1>Bienvenido a tu lista de Deseos</h1>
        <crear-componente @producto-anadido="${this.crearProducto}"></crear-componente>
        <listado-componente 
            id="listado" 
            .productos="${this.listaDeseos}"
            @producto-changed="${this.tareaCompletada}" 
            @producto-deleted="${this.eliminarProducto}" 
            @edit-ok="${this.productoEditado}"
        ></listado-componente>
        `;
    }

    crearProducto(e) {
        this.listaDeseos = [
            ...this.listaDeseos,
            {
                nombre: e.detail,
                completed: false,
                id: this.listaDeseos.length,
                precio: 0,
                cantidad: 0,
                imagen: '',
                descripcion: '',
            }
        ]
    }

    tareaCompletada(e) {

        this.listaDeseos = this.listaDeseos.map(item => {
            if (item.id == e.detail.producto.id) {
                return {
                    ...item,
                    completed: e.detail.state
                }
            } else {
                return item;
            }
        });
    }

    eliminarProducto({detail: {producto:prod}} = e) {
        this.listaDeseos = this.listaDeseos.filter(item => item.id !== prod.id);
    }

    productoEditado({detail: {objeto: obj, id: id}} = e) {
        this.listaDeseos = this.listaDeseos.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    nombre: obj.name,
                    precio: obj.prize,
                    cantidad: obj.amount,
                    imagen: obj.photo,
                    descripcion: obj.description,

                }
            } else {
                return item;
            }
        });
    }

}

customElements.define('componente-app', ComponenteApp);