import { Component } from '@stencil/core';

@Component({
  tag: 'th-training-body-content',
  styleUrl: 'th-training-body-content.css',
  
})
export class ThTrainingBodyContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Ionic Training</h1>
          <p>The best teams are the most well-informed teams. We offer a series of workshops and training sessions to level up entire departments of developers. Each workshop is led by an experienced trainer and Ionic expert on the topic of delivering enterprise Ionic applications and best practices.</p>
          <p>Generally, companies opt to go with a two-day or three-day workshop, covering the following topics:</p>
          <ul>
            <li>Application architecture guidance and how to get from where you are to where you need to be</li>
            <li>Typescript best practices for teams</li>
            <li>Process recommendations</li>
            <li>Detailed code review and analysis</li>
            <li>Strategies of sharing data, state management and application structure</li>
            <li>Strategies for managing upgrades</li>
            <li>3rd party library recommendations</li>
            <li>Automated testing and continuous integration</li>
            <li>Future Proofing apps</li>
            <li>Working with Cordova and Capacitor</li>
            <li>Deploying to multiple channels with one codbase</li>
          </ul>

          <p>Teams that work with Theracode enjoy faster go-to-market, higher quality applications, and more effective team members.</p>

        </div>
      </div>
    ];
  }
}
