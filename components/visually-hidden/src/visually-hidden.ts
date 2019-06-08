import { LitElement, html, css, customElement } from 'lit-element';

declare global {
  interface HTMLElementTagNameMap {
    'visually-hidden': VisuallyHidden;
  }
}

@customElement('visually-hidden')
export default class VisuallyHidden extends LitElement {
  static get styles() {
    return css`
      :host {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        position: absolute;
      }
    `;
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
