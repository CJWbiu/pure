import { Component, Listen, Host, Prop, h } from '@stencil/core';
import type { PuButtonType, PuButtonSize, PuButtonShape } from './types';

@Component({
  tag: 'pu-button',
  styleUrl: './style/button.scss',
  shadow: true,
})
export class PuButton {
  @Prop()
  type: PuButtonType = 'default';

  @Prop()
  disabled = false;

  @Prop()
  loading = false;

  @Prop()
  danger = false;

  @Prop()
  ghost = false;

  @Prop()
  href?: string;

  @Prop()
  size: PuButtonSize = 'm';

  @Prop()
  shape: PuButtonShape = 'square';

  @Listen('click')
  handleClick(e) {
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
    return (
      <Host>
        {this.type === 'link' && this.href ? (
          <a onClick={e => this.handleClick(e)} href={this.href} class={this.getBtnClass()}>
            <slot></slot>
          </a>
        ) : (
          <button onClick={e => this.handleClick(e)} class={this.getBtnClass()}>
            <slot></slot>
          </button>
        )}
      </Host>
    );
  }
}
