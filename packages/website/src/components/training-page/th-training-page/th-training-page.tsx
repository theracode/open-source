import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-training-page',
  styleUrl: 'th-training-page.css'
})
export class ThTrainingPage {

  render() {
    return [
      <div class="grid">
        <th-header
          headerText="Professional Workshops"
          subText="We offer a variety of workshops and staff training options to level up Ionic skils and best practices throughout engineering organizations. We offer both on-site and online options."
        >
          <div slot="button" class="btn-container">
            <a href="/contact">
              <ion-button slot="button">Get in touch</ion-button>
            </a>
          </div>
        </th-header>

        <th-training-body-content></th-training-body-content>

        <th-training-summary></th-training-summary>

        <th-footer></th-footer>
      </div>
    ]
  }
}


