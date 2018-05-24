import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-engineering-page',
  styleUrl: 'th-engineering-page.css'
})
export class ThEngineeringPage {

  render() {
    return [
      <div class="grid">
        <th-header
          headerText="Top Notch Engineers"
          subText="Our staff of exclusively senior engineers are all hand-chosen for their Ionic contributions and experiences. We have the highest concentration of Ionic talent on our staff, and it shows."
        >
          <div slot="button" class="btn-container">
            <a href="/contact">
              <ion-button slot="button">Get in touch</ion-button>
            </a>
          </div>
        </th-header>

        <th-engineering-body-content></th-engineering-body-content>

        <th-engineering-summary></th-engineering-summary>

        <th-footer></th-footer>
      </div>
    ]
  }
}


