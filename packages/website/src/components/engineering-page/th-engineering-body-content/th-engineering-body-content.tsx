import { Component } from '@stencil/core';

@Component({
  tag: 'th-engineering-body-content',
  styleUrl: 'th-engineering-body-content.css',
  
})
export class ThEngineeringBodyContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Engineer Staffing</h1>
          <p>We go beyond consulting and training, to collaborating directly with client engineers on real application code and infrastructure. Not only is each of our engineers a top-notch Ionic developer, but they're well versed in the entire stack to help resolve any and all problems your team may encounter.</p>

          <p>Our main engineering offering makes Theracode engineers available to contribute code and provide infrastructure assistance to teams on a weekly or hourly basis. For teams who could use a hand getting a special project started on the right foot, this is a great option to have experts directly applying our recommended best practices. But we don't just write code and leave, we're constantly pairing with and training our clients to help them understand what we're doing and why we do it.</p>

        </div>
      </div>
    ];
  }
}
