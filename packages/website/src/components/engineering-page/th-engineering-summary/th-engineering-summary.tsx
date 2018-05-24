import { Component } from '@stencil/core';

@Component({
  tag: 'th-engineering-summary',
  styleUrl: 'th-engineering-summary.css',
  
})
export class ThEngineeringSummary {
  
  render() {
    return [
      <div class="container">
        <div class="content">
          <h1>The Theracode Advantage</h1>
          <p>Our architects and engineers at Theracode have worked as lead engineers on the Ionic team directly, or have made significant contributions to open source projects in the Ionic community. Our experience working with Ionic, and many of the world's top brands using Ionic, gives us first-hand knowledge what patterns work for enterprise, and which ones don't.</p>
        </div>
      </div>
    ];
  }
}