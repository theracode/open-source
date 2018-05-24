import { Component } from '@stencil/core';

@Component({
  tag: 'th-solutions-engineering-content',
  styleUrl: 'th-solutions-engineering-content.css',
  
})
export class ThSolutionsEngineeringContent {
  
  render() {
    return [
      <div class="container">
        <div class="content">
          <h1>Engineering Staff Augmentation</h1>
          <p class="subheader">
          We go beyond consulting and training, to collaborating directly with client engineers on real application code and infrastructure. Not only is each of our engineers a top-notch Ionic developer, but they're well versed in the entire stack to help resolve any and all problems your team may encounter. Each of our engineers undergoes a rigorous Ionic and full-stack screening to ensure they're exceptional engineers.
          </p>
          <a href="/engineering"><ion-button>Learn More</ion-button></a>
        </div>
        <div class="img">
          <img src="/assets/images/code-white.png"/>
        </div>
      </div>
    ];
  }
}



