import { Component } from '@stencil/core';

@Component({
  tag: 'th-about-body-content',
  styleUrl: 'th-about-body-content.css',
  
})
export class ThAboutBodyContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>About Us</h1>
          <p>Theracode, a combination of code and therapy, was founded in 2018 after speaking to many companies using Ionic that needed true experts to help guide them. Ionic has adoption within virtually every company in the fortune 100. After talking to many of them, a common theme emerged: They were frustrated with inexperienced, unreliable consultants. They needed true experts to help their teams and bring their vision to life. Theracode is founded by former Ionic employee and lead engineer Dan Bucholtz.</p>
          <p>We're is the #1 Ionic consulting company in the world because we only work with Ionic. For most consulting companies, Ionic is the occasional niche that they know a little bit about. We bleed Ionic blue, and it shows up in the quality of our work.</p>
          <p>We're different then most consulting companies because we only hire senior level engineers that have a track record in enterprise or solution architecture for fortune 500 companies. All of our engineers are Ionic experts, but they're full stack developers and able to solve problems throughout the stack. We cherry pick the best engineers available in the Ionic community, and pay them handsomely since we value quality outcomes and happy customers above all else.</p>
          <p>As far as Ionic consulting goes, Theracode is not the cheapest, but we are the best. We fundamentally believe that you get what you pay for with consultants. We are worth it.</p>
          <a href="/contact"><ion-button>Connect With Us</ion-button></a>
        </div>
      </div>
    ];
  }
}