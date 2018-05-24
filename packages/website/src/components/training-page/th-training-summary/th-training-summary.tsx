import { Component } from '@stencil/core';

@Component({
  tag: 'th-training-summary',
  styleUrl: 'th-training-summary.css',
  
})
export class ThTrainingSummary {
  
  render() {
    return [
      <div class="container">
        <div class="content">
          <h1>The Theracode Advantage</h1>
          <p>Our training sessions have proven effective time and time again. We understand that Ionic is a part of a broader solution, and in order for a team to be successful they need to understand and execute the entire software development life cycle. By the end of our workshops, attendees will have a clear picture of how to accomplish that.</p>
        </div>
      </div>
    ];
  }
}