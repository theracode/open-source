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
          subText="Each member of our team is an accomplished solution architect with extensive experience working with large companies. We're great with technology and navigating organizational dynamics."
        >
          <div slot="button" class="btn-container">
            <th-route-link url="/contact">
              <ion-button slot="button">Get in touch</ion-button>
            </th-route-link>
          </div>
        </th-header>

        <th-architecture-body-content></th-architecture-body-content>

        <th-architecture-summary></th-architecture-summary>

        <th-footer></th-footer>
      </div>
    ];
  }
}


