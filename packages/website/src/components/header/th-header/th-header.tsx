import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'th-header',
  styleUrl: 'th-header.css',
  
})
export class ThHeader {
  
  @Prop() headerText = "";
  @Prop() subText = "";
  @Prop() buttonText = "";


  render() {
    return [
      <div class="grid">
        <th-nav></th-nav>
        <div class="header-text">
          <h1>{this.headerText}</h1>
          <h2>{this.subText}</h2>
          <slot name="button"></slot>
        </div>
      </div>
    ];
  }
}
