import { Component } from '@stencil/core';

@Component({
  tag: 'th-careers-benefits-summary',
  styleUrl: 'th-careers-benefits-summary.css',
  
})
export class ThCareersBenefitsSummary {
  
  render() {
    return [
      <div class="container">
        <div class="content">
          <h1>Benefits</h1>
            <ul>
              <li>Competitive, market-rate salary for software architect role</li>
              
              <li>Health, dental, vision, short-and-long term disability insurance</li>
              
              <li>401K plan</li>

              <li>Unlimited PTO</li>

              <li>Flexible working hours (core hours of 10am - 2pm CST)</li>

              <li>Family-first culture</li>
            </ul>
        </div>
      </div>
    ];
  }
}