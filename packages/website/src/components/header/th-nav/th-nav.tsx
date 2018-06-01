import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'th-nav',
  styleUrl: 'th-nav.css',

})
export class ThNav {

  @Prop({connect: 'ion-popover-controller'}) popoverController: HTMLIonPopoverControllerElement;

  popoverDisplayed = false;

  showSolutionsPopover(event: UIEvent) {
    return this.showPopover(event, 'th-solution-popover');
  }

  showCulturePopover(event: UIEvent) {
    return this.showPopover(event, 'th-culture-popover');
  }

  async showPopover(event: UIEvent, component: string) {
    if (!this.popoverDisplayed) {
      this.popoverDisplayed = true;
      const popover = await this.popoverController.create({
        component: component,
        ev: event
      });
      popover.onDidDismiss().then(() => {
        this.popoverDisplayed = false;
      });
      
      return popover.present();
    }
  }

  render() {
    return [
      <div class="container" main>
        <th-route-link url="/">
          <div class="logo">
            <img src="/assets/images/logo.png"></img>
            <h1 class="title">Theracode</h1>
          </div>
        </th-route-link>
        <nav>
          <th-route-link url="/about">About</th-route-link>
          <a href="https://medium.com/@codetherapy">Blog</a>
          <div class="popover-link"

            onClick={(event: UIEvent) => {
              this.showSolutionsPopover(event);
            }}

            onMouseOver={(event: UIEvent) => {
              this.showSolutionsPopover(event);
            }}
          >Solutions
          </div>
          <div class="popover-link"

            onClick={(event: UIEvent) => {
              this.showCulturePopover(event);
            }}

            onMouseOver={(event: UIEvent) => {
              this.showCulturePopover(event);
            }}
          >Culture
          </div>
          <th-route-link url="/contact">
            <ion-button>Contact</ion-button>
          </th-route-link>
        </nav>
        <div class="menu-icon">
          <ion-menu-button></ion-menu-button>
        </div>
      </div>
    ];
  }
}

