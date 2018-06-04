import { Component, Listen } from '@stencil/core';
import { dismissPopover, navigate } from '../../../helpers/utils';

@Component({
  tag: 'th-culture-popover',
  styleUrl: 'th-culture-popover.css',

})
export class ThCulturePopover {

  @Listen('resize')
  mouseLeave() {
    dismissPopover();
  }

  activateRoute(url: string) {
    dismissPopover();
    navigate(url);
  }

  render() {
    return [
      <div class="container" onMouseLeave={() => {
        this.mouseLeave();
      }}>
        <ion-list>
          <ion-item onClick={() => {
            this.activateRoute('/careers');
          }}>
            <ion-label>
              Careers
            </ion-label>
          </ion-item>
          <ion-item href="https://github.com/Theracode/engineering-code-of-conduct">
            <ion-label>
              Code of Conduct
            </ion-label>
          </ion-item>
          <ion-item onClick={() => {
            this.activateRoute('/culture');
          }}>
            <ion-label>
              Culture
            </ion-label>
          </ion-item>
          <ion-item href="https://github.com/theracode">
            <ion-label>
              Github
            </ion-label>
          </ion-item>
          <ion-item href="https://twitter.com/theracode">
            <ion-label>
              Twitter
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    ];
  }
}
