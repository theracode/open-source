import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-about-page',
  styleUrl: 'th-about-page.css'
})
export class ThAboutPage {

  render() {
    return [
      <div class="grid">
        <th-header
          headerText="About Theracode"
          subText="Theracode is the world's #1 Ionic consulting firm. We help medium to large companies make their Ionic apps and PWAs successful through training, architectural best practices, and engineering staff augmentation. We partner with teams throughout the entire software development life cycle in order to ensure the best quality results."
        >
        </th-header>

        <th-about-body-content></th-about-body-content>

        <th-about-mission></th-about-mission>
        
        <th-footer></th-footer>
      </div>
    ]
  }
}


