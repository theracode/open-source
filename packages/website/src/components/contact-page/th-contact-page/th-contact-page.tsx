import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-contact-page',
  styleUrl: 'th-contact-page.css'
})
export class ThContactPage {

  render() {
    return [
      <div class="grid">
        <th-header
          headerText="How can we help?"
          subText="Each app is it's own journey. Let us serve as the guide and ensure you successfully arrive at the destination. We're here to help in any way we can."
        >
        </th-header>
        
        <th-contact-body-content></th-contact-body-content>
        
        <th-footer></th-footer>
      </div>
    ]
  }
}


