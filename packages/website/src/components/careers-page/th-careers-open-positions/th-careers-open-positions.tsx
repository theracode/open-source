import { Component } from '@stencil/core';

@Component({
  tag: 'th-careers-open-positions',
  styleUrl: 'th-careers-open-positions.css',
  
})
export class ThCareersOpenPositions {
  
  render() {
    return [
      <div class="container">
        <h1 class="title">Open Positions</h1>
        <div class="job-listing">
          <h2>Ionic Architect</h2>
          <p>Work directly with enterprise clients in a consulting role providing architecture suggestions and guide implementation of best practices. This role typically includes 20-25 hours per week or engineering staff augmentation work focusing on Ionic, Stencil, Cordova and Capacitor with a willingness to chip in wherever needed to make the customer successful.</p>
        </div>
        <div class="get-in-touch">
        <h1 class="title">How to apply</h1>
          <p>Shoot us an email with a resume and three or four paragraphs about why you think you'd be a good fit for the desired role. We will do our best to get back to you within 7 days of receiving the application.</p>

          <a href="mailto:jobs@theracode.io"><ion-button>jobs@theracode.io</ion-button></a>
        </div>
      </div>
    ];
  }
}
