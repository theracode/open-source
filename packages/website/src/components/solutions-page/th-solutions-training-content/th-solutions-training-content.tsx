import { Component } from '@stencil/core';

@Component({
  tag: 'th-solutions-training-content',
  styleUrl: 'th-solutions-training-content.css',
  
})
export class ThSolutionsTrainingContent {
  
  render() {
    return [
      <div class="container">
        <div class="img">
          <img src="/assets/images/training-white.png"/>
        </div>
        <div class="content">
          <h1>Training and Workshops</h1>
          <p class="subheader">
          The best teams are the most well-informed teams. We offer a series of workshops and training sessions to level up entire departments of developers. Each workshop is led by an experienced trainer and Ionic expert. We have 1-day, 2-day and 4-day offerings, each covering different depth and breadth on the topic of delivering enterprise Ionic applications and best practices.
          </p>
          <a href="/training"><ion-button>Learn More</ion-button></a>
        </div>
      </div>
    ];
  }
}



