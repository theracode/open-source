import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-culture-page',
  styleUrl: 'th-culture-page.css'
})
export class ThCulturePage {

  render() {
    return [
      <div class="grid">
        <th-header
          headerText="Our Culture"
          subText="The Theracode team is a group of pragmatic problem solvers, creative coders, and clear communicators who take immense pride in our work. Curiosity and competitiveness drive us to learn new skils and create innovative solutions for our customers. Each of us have own unique set of why's, and we work to be better every single day."
        >
          <div slot="button" class="btn-container">
            <a href="/careers">
              <ion-button slot="button">Job Openings</ion-button>
            </a>
          </div>
        </th-header>
        

        <th-culture-body-content></th-culture-body-content>

        <th-culture-summary></th-culture-summary>
        
        <th-footer></th-footer>
      </div>
    ]
  }
}


