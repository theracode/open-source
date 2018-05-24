import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-solutions-page',
  styleUrl: 'th-solutions-page.css'
})
export class ThSolutionsPage {

  render() {
    return [
      <div class="grid">
        <th-header
          headerText="Our Services"
          subText="Theracode makes money by selling Ionic professional services to medium to large companies. Each engagement typically consists of three phases: Architectural oversight and consulting, staff training and workshops, and engineering staff augmentation."
        >
          <div slot="button" class="btn-container">
            <a href="/contact">
              <ion-button slot="button">Get in touch</ion-button>
            </a>
          </div>
          
        </th-header>

        <th-solutions-architecture-content></th-solutions-architecture-content>

        <th-solutions-training-content></th-solutions-training-content>

        <th-solutions-engineering-content></th-solutions-engineering-content>

        <th-footer></th-footer>
      </div>
    ]
  }
}


