import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { PuButtonShape, PuButtonSize, PuButtonType } from './types';
import buttonCss from '../style/button.scss?inline';

@customElement('pu-button')
export class PuButton extends LitElement {
  @property()
  type: PuButtonType = 'default';

  @property()
  disabled = false;

  @property()
  loading = false;

  @property()
  danger = false;

  @property()
  ghost = false;

  @property()
  href?: string;

  @property()
  size: PuButtonSize = 'm';

  @property()
  shape: PuButtonShape = 'square';

  private handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  }

  private getBtnClass() {
    let classList: string[] = ['pu-button'];

    this.type && classList.push(`pu-button--${this.type}`);
    this.size && classList.push(`pu-button--${this.size}`);
    this.disabled && classList.push('disabled');
    this.shape && classList.push(`pu-button--${this.shape}`);
    this.loading && classList.push('loading');
    this.danger && classList.push('danger');
    this.ghost && classList.push('ghost');

    return classList.join(' ');
  }

  render() {
    const classText = this.getBtnClass();

    if (this.type === 'link' && this.href) {
      return html`
        <a @click=${this.handleClick} href=${this.href} class=${classText}>
          <slot></slot>
        </a>
      `;
    }

    return html`
      <button @click=${this.handleClick} class=${classText}>
        <slot></slot>
      </button>
    `;
  }

  static styles = css`
    ${buttonCss}
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'pu-button': PuButton;
  }
}
