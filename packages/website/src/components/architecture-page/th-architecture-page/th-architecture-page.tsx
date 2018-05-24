import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-architecture-page',
  styleUrl: 'th-architecture-page.css'
})
export class ThArchitecturePage {

  render() {
    return [
      <div class="grid">
        <th-header
          headerText="Exceptional Architects"
          subText="Each member of our team is an accomplished software architect with extensive experience working with or for fortune 500 companies. We're both great with technology and navigating organizational dynamics."
        >
          <div slot="button" class="btn-container">
            <a href="/contact">
              <ion-button slot="button">Get in touch</ion-button>
            </a>
          </div>
        </th-header>

        <th-architecture-body-content></th-architecture-body-content>

        <th-architecture-summary></th-architecture-summary>

        <th-footer></th-footer>
      </div>
    ]
  }
}


