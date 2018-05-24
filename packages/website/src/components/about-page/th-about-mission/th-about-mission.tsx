import { Component } from '@stencil/core';

@Component({
  tag: 'th-about-mission',
  styleUrl: 'th-about-mission.css',
  
})
export class ThAboutMission {
  
  render() {
    return [
      <div class="container">
        <div class="mission-container">
          <h1>Our Mission</h1>
          <p>Our goal is to work together with medium-to-large size businesses to ensure that all parties are successful. We will accomplish this through providing best-in-class services in architecture, guidance and engineering.</p>
        </div>
        <div class="values-container">
          <h1>Our Philosphy</h1>
          <p>We believe that the best outcomes come from the best engineers, so we only employ high-quality senior engineers. We believe remote work enable our employees to live their best life, and provides us a strategic advantage.</p>
        </div>
      </div>
    ];
  }
}