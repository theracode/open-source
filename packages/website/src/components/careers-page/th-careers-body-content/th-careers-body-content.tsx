import { Component } from '@stencil/core';

@Component({
  tag: 'th-careers-body-content',
  styleUrl: 'th-careers-body-content.css',
  
})
export class ThCareersBodyContent {
  
  render() {
    return [
      <div class="container">
        <div class="what-we-do">
          <h1>What we do</h1>
          
          <p>We work with Fortune 500 companies to build out the highest quality Ionic apps and PWAs using a combination of architecture consulting, training, and engineering staff augmentation.</p>

          <p>We believe the web on mobile has a very bright future, and Ionic tools are going to the de facto solution in the coming years.</p>

        </div>
        <div class="what-we-look-for">
          <h1>What we look for</h1>
          <p>We're always on the look out for Ionic architects who are nice, responsible and well-rounded people to join our remote team. Presently we are only considering candidates from the United States of America.</p>
          <p>Outside of Ionic expertise, we value software architecture experience and top-notch communication skills.</p>
        </div>

      </div>
    ];
  }
}
