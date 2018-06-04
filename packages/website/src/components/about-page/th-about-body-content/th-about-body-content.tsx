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
          
          <p>Theracode, a combination of code and therapy, was started in 2018 on a few basic premises. The first being, the days of cross platform mobile are very early, and Ionic is poised to be one of the best options. Secondly, the web has been a super power to enable teams to deliver great software quickly and easily. Finally, there is a significant need within the enterprise space for a premier consultancy to help teams meet their goals. Ionic has adoption at some level of the vast majority of the fortune 100. It’s easy to see this expand to the fortune 500 in the coming years. There are presently many teams that need a true expert to guide them and bring their vision to life. The need will only increase in the coming years. Theracode is founded by one of the lead engineers of Ionic and creators of Ionic (2, 3, and 4), Dan Bucholtz, and specializes in providing world class Ionic consulting.</p>

          <p>We’re the best Ionic consultancy because Ionic is all we do, and we have the type of staff members that other consultancies dream of. We bleed Ionic blue through and through. Because of our unique position, we’re able to cherry pick the very best of the best from the Ionic community.</p>

          <p>We’re different from other consulting companies because we only hire senior level engineers that have a proven track record in in solution/enterprise architecture for large firms. All of our engineers are Ionic experts, but they’re also experts across the entire stack and great problem solvers.</p>

          <p>We’ll be straight with you - we’re not the cheapest option available, but we are the best. In life, we fundamentally believe that you get what you pay for. We believe this is especially true in the software consulting world. With Theracode, you get what you pay for, and that results in a fantastic engagement and a top-notch app.</p>
          <th-route-link url="/contact">
            <ion-button>Connect With Us</ion-button>
          </th-route-link>
        </div>
      </div>
    ];
  }
}
