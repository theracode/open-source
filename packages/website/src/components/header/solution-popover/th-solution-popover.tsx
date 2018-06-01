import { Component, Listen } from '@stencil/core';
import { dismissPopover, navigate } from '../../../helpers/utils';

@Component({
  tag: 'th-solution-popover',
  styleUrl: 'th-solution-popover.css',

})
export class ThSolutionPopover {

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
            this.activateRoute('/solutions');
          }}>
            <ion-label>
              Solutions
            </ion-label>
          </ion-item>
          <ion-item onClick={() => {
            this.activateRoute('/architecture');
          }}>
            <ion-label>
              Architecture
            </ion-label>
          </ion-item>
          <ion-item onClick={() => {
            this.activateRoute('/engineering');
          }}>
            <ion-label>
              Engineering
            </ion-label>
          </ion-item>
          <ion-item onClick={() => {
            this.activateRoute('/training');
          }}>
            <ion-label>
              Training
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    ];
  }
}
