import { Component } from '@stencil/core';

@Component({
  tag: 'th-solutions-architecture-content',
  styleUrl: 'th-solutions-architecture-content.css',
  
})
export class ThSolutionsArchitectureContent {
  
  render() {
    return [
      <div class="container">
        <div class="content">
          <h1>Architectural Consulting</h1>
          <p class="subheader">
          For Enterprise teams working on their first implementation, or upgrading an existing app, we will serve as a pivotal expert to ensure the project's success. Teams that work with Theracode enjoy faster go-to-market, higher quality applications, and more effective team members. We will help implement best practices and patterns for building and deploying Ionic applications at scale.
          </p>
          <a href="/architecture"><ion-button>Learn More</ion-button></a>
        </div>
        <div class="img">
          <img src="/assets/images/architecture-white.png"/>
        </div>
      </div>
    ];
  }
}



