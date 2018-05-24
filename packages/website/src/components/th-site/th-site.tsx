import '@ionic/core';
import 'ionicons';

import { Component } from '@stencil/core';

@Component({
  tag: 'th-site',
  styleUrl: 'th-site.css'
})
export class ThSite {

  render() {
    return  [
      <th-menu></th-menu>,
      <th-router>
        <th-route url='/' component='th-landing-page'></th-route>
          
        <th-route url='/about' component='th-about-page'></th-route>
        
        <th-route url='/solutions' component='th-solutions-page'></th-route>
        
        <th-route url='/architecture' component='th-architecture-page'></th-route>
        
        <th-route url='/training' component='th-training-page'></th-route>
        
        <th-route url='/engineering' component='th-engineering-page' ></th-route>
        
        <th-route url='/culture' component='th-culture-page'></th-route>

        <th-route url='/careers' component='th-careers-page'></th-route>

        <th-route url='/contact' component='th-contact-page'></th-route>
      </th-router>
    ]
  }
}
