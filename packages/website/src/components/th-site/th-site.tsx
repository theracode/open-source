import '@ionic/core';
import '@theracode/router';
import 'ionicons';

import { Component, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'th-site',
  styleUrl: 'th-site.css'
})
export class ThSite {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  @Listen('window:swUpdate')
  async serviceWorkerUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New content available',
      showCloseButton: true,
      closeButtonText: 'Reload',

    });
    await toast.present();

    toast.onDidDismiss(() => {
      window.location.reload();
    });
  }

  render() {
    return [
      <th-menu></th-menu>,
      <th-router>
        <th-route url="/" exact={true} component="th-landing-page"></th-route>
        
        <th-route url="/about" component="th-about-page"></th-route>

        <th-route url="/solutions" component="th-solutions-page"></th-route>

        <th-route url="/architecture" component="th-architecture-page"></th-route>

        <th-route url="/training" component="th-training-page"></th-route>

        <th-route url="/engineering" component="th-engineering-page" ></th-route>

        <th-route url="/culture" component="th-culture-page"></th-route>

        <th-route url="/careers" component="th-careers-page"></th-route>

        <th-route url="/contact" component="th-contact-page"></th-route>
      </th-router>
    ];
  }
}
