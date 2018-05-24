import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-landing-page',
  styleUrl: 'th-landing-page.css'
})
export class ThLandingPage {

  render() {
    return  (
      <div class="grid">
        <th-header
          headerText="Theracode helps enterprise teams build better with Ionic"
          subText="Theracode has the world's highest concentration of Ionic expertise outside of the company, and we use that depth to help our clients work through the biggest and most nuanced challenges of building Ionic apps and PWAs at scale.">
        </th-header>
        
        <th-landing-what-we-do></th-landing-what-we-do>

        <th-landing-architecture-process></th-landing-architecture-process>
        <th-landing-training-process></th-landing-training-process>
        <th-landing-engineering-process></th-landing-engineering-process>

        <th-landing-good-hands></th-landing-good-hands>

        <th-landing-team></th-landing-team>
        
        <th-footer></th-footer>
      </div>
    )
  }
}
