import { LitElement, html } from 'lit-element';
import './input-componente'

class CrearComponente extends LitElement {
  static get properties() {
    return {
      value: { type: String }
    };
  }

  constructor() {
    super();
    this.value = '';
  }

  render() {
    return html`
      <input-componente
        label="Nuevo Producto"
        value="${this.value}"
        placeholder="Escribe el producto y pulsa enter"
        @enter-pressed="${this.crearProducto}"
        @input="${(e) => this.value = e.target.value}"
      ></input-componente>
    `;
  }

  crearProducto(e) {
    this.dispatchEvent(new CustomEvent('producto-anadido', {
      detail: e.target.value
    }));
    this.value = '';
  }
}
customElements.define('crear-componente', CrearComponente);