import { Component } from '@stencil/core';

@Component({
  tag: 'th-landing-team',
  styleUrl: 'th-landing-team.css',
  
})
export class ThLandingTeam {
  
  render() {
    return [
      <div class="container">
        <h1>Unparalled Expertise</h1>
        <h2>Theracode is founded by core team member and former Ionic employee Dan Bucholtz.</h2>
        <div class="photo">
          <img src="/assets/images/dan.jpg"></img>
        </div>
        <div class="copy">
<p>Dan has been on the Ionic core team since the early days. As one of the lead developers on the team, and played an integral role in delivering the navigation system, the routing system, the overlay system, and was the chief architect behind the Ionic build process. He is one of the world's true experts in all things Ionic.</p>

<p class="second">Prior to working at Ionic, Dan was a software architect and lead developer guiding teams of engineers in building enterprise Ionic apps for a fortune 500 company. In addition to those responsibilities, Dan also has experience as a lead engineer building out enterprise-grade web services, real-time systems, native mobile apps, and successful SaaS products.</p>
        </div>
      </div>
    ];
  }
}

