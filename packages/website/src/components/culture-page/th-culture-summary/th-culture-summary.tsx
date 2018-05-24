import { Component } from '@stencil/core';

@Component({
  tag: 'th-culture-summary',
  styleUrl: 'th-culture-summary.css',
  
})
export class ThCultureSummary {
  
  render() {
    return [
      <div class="container">
        <div class="content">
          <h1>We're hiring</h1>
          <p>We are always on the look-out for exceptional people. Do the above jive with how you view the world? Are you an exceptional Ionic developer? We'd love to chat more.</p>
          <ion-button>Career Opportunities</ion-button>
        </div>
      </div>
    ];
  }
}