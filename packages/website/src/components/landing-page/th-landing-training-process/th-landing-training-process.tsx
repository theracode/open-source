import { Component } from '@stencil/core';

@Component({
  tag: 'th-landing-training-process',
  styleUrl: 'th-landing-training-process.css',
  
})
export class ThLandingTrainingProcess {
  
  render() {
    return [
      <th-landing-generic-process 
        imagePath="/assets/images/training.png"
        titleText="Training"
        bodyContent="The best teams are the most well-informed teams. We offer a series of workshops and training sessions to level up entire departments of developers. Each workshop is led by an experienced trainer and Ionic expert on the topic of delivering enterprise Ionic applications and best practices."
        buttonClass="purple-btn"
      ></th-landing-generic-process>
    ];
  }
}

