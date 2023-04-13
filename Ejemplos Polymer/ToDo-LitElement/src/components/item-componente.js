import { LitElement, html, css } from 'lit-element';
import './switch-componente';

class ItemComponente extends LitElement {
    static get properties() {
        return {
            producto: { type: Object },
            modificacion: {type: Boolean}
        };
    }

    static get styles() {
        return css`
    :host {
        display: block;
    }
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    span{
        padding: 10px;
    }

    .styled-table {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .styled-table thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }
    .styled-table th,
    .styled-table td {
        padding: 12px 15px;
        width: 150px;
    }
    .styled-table tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    .styled-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .styled-table tbody tr:last-of-type {
        border-bottom: 2px solid #009879;
    }
    .styled-table tbody td span img {
        width: 50px;
        height: 100px 
    }
    button {
            background-color: #009879;
            border-radius: 10px;
            border: 0;
            box-sizing: border-box;
            color: #eee;
            cursor: pointer;
            font-size: 18px;
            height: 40px;
            margin-top: 15px;
            text-align: center;
            width: 60%;
          }
    
    .btn-eliminar {
        background-color: red
    }

    .td-botones {
        display:flex
        
    }

    `;
    }

    constructor(){
        super();
        this.modificacion = false;
    }

    render() {
        return html`
    <table class="styled-table">
        <thead>
        <tr>
            <td>
            ¿Conseguido?:
            </td>
            <td>
            Número identificativo: 
            </td>
            <td>
            Nombre:
            </td>
            <td>
            Precio:
            </td>    
            <td>
            Cantidad:
            </td> 
            <td>
            Descripción:
            </td>
            <td>
            Imagen:
            </td>
            <td>
            Acciones:
            </td>                
        </tr>
        </thead>
        <tbody class="${this.producto.completed ? 'completed' : ''}">
        <tr>
            <td>
            <switch-componente 
                ?checked="${this.producto.completed}" 
                @switch-componente-checked="${this.checkedChanged}">
            </switch-componente> 
            </td>
            <td>
            <span>
                ${this.producto.id}
            </span>
            </td>
            <td>
                <span>
                    ${this.producto.nombre}
                </span>
            </td>
            <td>
                <span>
                    ${this.producto.precio}
                </span>
            </td>
            <td>
                <span>
                    ${this.producto.cantidad}
                </span>
            </td>
            <td>
                <span>
                    ${this.producto.descripcion}
                </span>
            </td>
            <td>
                <span>
                    ${this.producto.imagen !== '' ? html`<img src="${this.producto.imagen}" alt="">`: html`<img src="data:image/png;base64,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" alt="">`  }                          
                </span>
            </td>
            <td class="td-botones">
                <button @click="${this.modificarProducto}">Modificar</button>
                <button @click="${this.eliminarProducto}" class="btn-eliminar">Eliminar</button>
            </td>
        </tr>
        </tbody>
    </table>  
    ${ this.modificacion 
    ? html`<editar-componente 
                .producto="${this.producto}" 
                @edit-cancel="${this.edicionCancelada}" 
                @edit-ok="${this.edicionCancelada}">
            </editar-componente>`
    : ''}
    `;
    }

    checkedChanged(e) {
        this.dispatchEvent(new CustomEvent('producto-changed', {
            bubbles: true,
            composed: true,
            detail: {
                state: e.detail,
                producto: this.producto
            }
        }));

    }

    modificarProducto() {
        this.modificacion = !this.modificacion;
    }

    eliminarProducto(e) {
        this.dispatchEvent(new CustomEvent('producto-deleted', {
            bubbles: true,
            composed: true,
            detail: {
                state: e.detail,
                producto: this.producto
            }
        }));
    }

    edicionCancelada() {
        this.modificacion = false;
    }
}
customElements.define('item-componente', ItemComponente);