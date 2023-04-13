import { LitElement, html, css } from 'lit-element';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EditarComponente extends LitElement {
    static get properties() {
        return {
            producto: { type: Object },
            prueba: { type: Object}
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    static get styles() {
        return css`
          form {
            margin: 0 auto;
            padding: 1em;
            border: 1px solid #009879;
            border-radius: 1em;
            box-sizing: border-box;
            height: 500px;
            padding: 20px;
            width: 320px;
          }

          ul {
            height: 50px;
            position: relative;
            width: 100%;
          }

          form li + li {
            margin-top: 1em;
          }

          label {
            color: #009879;
            font-family: sans-serif;
            font-size: 20px;
            font-weight: 600;
            margin-top: 30px;
            
          }

          input,
          textarea {
            font: 1em sans-serif;
            box-sizing: border-box;
            height: 40px;
            position: relative;
            width: 100%;
            border-radius: 10px;
            border: 1px solid #009879;
          }

          input:focus,
          textarea:focus {
            border-color: #000;
          }

          textarea {
            vertical-align: top;
            height: 5em;
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
            margin-top: 30px;
            text-align: center;
            width: 60%;
          }

          .div-buttons{
            display: flex;
            justify-content: space-between;
          }

          .btn-cancel{
            background-color: red;
          }
        `;

    }

    render() {
        return html`
            <form id='edit-form'>
              <div class="form-control">
                <label for="name">Nombre: </label>
                <input id="name" name="name" type="text" value="${this.producto.nombre}" />
              </div>
              <div class="form-control">
                <label for="prize">Precio: </label>
                <input id="prize" name="prize" type="number" step="0.01" value="${this.producto.precio}" />
              </div>
              <div class="form-control">
                <label for="amount">Cantidad: </label>
                <input id="amount" name="amount" type="number" value="${this.producto.cantidad}" />
              </div>
              <div class="form-control">
                <label for="description">Descripcion: </label>
                <textarea id="description" name="description" rows="6" cols="65" >${this.producto.descripcion}</textarea>
              </div>
              <div class="form-control">
                <label for="photo">Url Foto: </label>
                <input id="photo" name="photo" type="text" value="${this.producto.imagen}" />
              </div>
              <div class="div-buttons">
                <button class="btn" type="submit">Modificar</button>
                <button class="btn-cancel" type="btn" @click="${this.cancelarEdicion}">Cancelar</button>
              </div>
            </form>
        `;
    }

    updated() {
      super.update();
      let objetoFormulario = this.shadowRoot.querySelector("#edit-form");
      objetoFormulario.addEventListener('submit', this.callbackFuntion.bind(this));
    }

    callbackFuntion(e) {
      e.preventDefault();
      const myFormData = new FormData(e.target);
      const formDataObj = Object.fromEntries(myFormData.entries());
      this.dispatchEvent(new CustomEvent('edit-ok', {
        bubbles: true,
        composed: true,
        detail: {objeto: formDataObj,
        id: this.producto.id
        }
    }));
    }

    cancelarEdicion() {
      this.dispatchEvent(new CustomEvent('edit-cancel', {
        bubbles: true,
    }));
    }


}

customElements.define('editar-componente', EditarComponente);