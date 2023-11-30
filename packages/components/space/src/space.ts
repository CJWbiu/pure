import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import type { PuSpaceAlignItems, PuSpaceJustifyContent } from './types';

@customElement('pu-space')
export class PuSpace extends LitElement {
  @property({
    reflect: true,
  })
  align?: PuSpaceAlignItems;

  @property({
    reflect: true,
    type: String,
  })
  justify?: PuSpaceJustifyContent;

  @property({
    reflect: true,
    type: Boolean,
  })
  vertical = false;

  @property({
    reflect: true,
  })
  gap = 8;

  @property({
    reflect: true,
    type: Boolean,
  })
  inline = false;

  private getStyle() {
    let alignItems = this.align;

    if (this.vertical && !alignItems) {
      alignItems = 'flex-start';
    }

    alignItems = alignItems || 'center';

    return {
      display: this.inline ? 'inline-flex' : 'flex',
      alignItems,
      justifyContent: this.justify,
      gap: this.gap + 'px',
      flexFlow: this.vertical ? 'column' : 'row',
    };
  }

  render() {
    return html`
      <div class="pu-space" style="${styleMap(this.getStyle())}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pu-space': PuSpace;
  }
}
