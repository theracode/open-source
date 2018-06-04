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
          <p>We are always on the look-out for exceptional people. Does the above jive with how you view the world? Are you an exceptional Ionic developer? We'd love to chat more.</p>
          <th-route-link url="/careers">
            <ion-button>Career Opportunities</ion-button>
          </th-route-link>
        </div>
      </div>
    ];
  }
}
