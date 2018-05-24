import { Component } from '@stencil/core';

@Component({
  tag: 'th-architecture-body-content',
  styleUrl: 'th-architecture-body-content.css',
  
})
export class ThArchitectureBodyContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Architectural Consulting</h1>
          <p>For Enterprise teams working on their first implementation, or upgrading an existing app, we will serve as a pivotal expert to ensure the project's success. We recognize and help with both technology and organizational challenges.</p>
          <p>The Theracode team focuses on solving the <span class="strong">big</span> challenges software teams have. Typically, we work with clients on the following topics:</p>

          <ul>
            <li>Upgrading from Ionic 1 apps to Ionic 3 or 4</li>
            <li>Strategies to scale huge projects that consist of many pages</li>
            <li>Guidance on how to collaborate and effectively share code between teams</li>
            <li>Detailed code review and analysis</li>
            <li>Strategies of sharing data, state management and application structure</li>
            <li>Managing Technical debt</li>
            <li>Complex and confusing bugs/regressions</li>
            <li>Performance Optimizations</li>
            <li>Automated testing and continuous integration</li>
            <li>And more!</li>
          </ul>

          <p>Teams that work with Theracode enjoy faster go-to-market, higher quality applications, and more effective team members.</p>

        </div>
      </div>
    ];
  }
}
