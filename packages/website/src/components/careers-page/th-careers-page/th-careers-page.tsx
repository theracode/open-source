import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-careers-page',
  styleUrl: 'th-careers-page.css'
})
export class ThCareersPage {

  render() {
    return [
      <div class="grid">
        <th-header
          headerText="Job Opportunities"
          subText="At Theracode, you'll do some of the most fulfilling work of your life, all while working remotely and being compensated generously. Everyone that joins our team is exceptional, and we think everyone is significantly more well rounded when they leave. We take a lot of pride in career development and giving each individual an opportunity to play a variety of roles within each project. For most people the work is challenging, but also very rewarding. If this sounds like something you're up for, check out our openings below."
        >
        </th-header>

        <th-careers-body-content></th-careers-body-content>

        <th-careers-benefits-summary></th-careers-benefits-summary>

        <th-careers-open-positions></th-careers-open-positions>

        <th-footer></th-footer>
      </div>
    ]
  }
}


