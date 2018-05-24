import { Component } from '@stencil/core';

@Component({
  tag: 'th-landing-architecture-process',
  styleUrl: 'th-landing-architecture-process.css',
  
})
export class ThLandingArchitectureProcess {
  
  render() {
    return [
      <th-landing-generic-process 
        imagePath="/assets/images/architecture.png"
        titleText="Architecture"
        bodyContent="For Enterprise teams working on their first implementation, or upgrading an existing app, we will serve as a pivotal expert to ensure the project's success. Teams that work with Theracode enjoy faster go-to-market, higher quality applications, and more effective team members."
        buttonClass="green-btn"
      ></th-landing-generic-process>
    ];
  }
}

