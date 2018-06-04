import { Component } from '@stencil/core';

@Component({
  tag: 'th-landing-engineering-process',
  styleUrl: 'th-landing-engineering-process.css',

})
export class ThLandingEngineeringProcess {

  render() {
    return [
      <th-landing-generic-process
        imagePath="/assets/images/code.png"
        titleText="Engineering"
        bodyContent="We go beyond consulting and training by collaborating directly with client engineers on real application code and infrastructure. Not only is each of our engineers a top-notch Ionic developer, but they're well versed in the entire stack to help resolve any and all problems a team may encounter."
        buttonClass="red-btn"
        url="/engineering"
      ></th-landing-generic-process>
    ];
  }
}

