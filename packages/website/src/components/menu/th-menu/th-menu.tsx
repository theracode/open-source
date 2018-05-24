import { Component } from '@stencil/core';

@Component({
  tag: 'th-menu',
  styleUrl: 'th-menu.css',
  
})
export class ThMenu {
  
  render() {
    return [
      <div>
        <ion-menu side="start">
            <div class="menu-container">
              <ion-menu-toggle>
                <th-route-link url="/">Home</th-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <th-route-link url="/about">About</th-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <th-route-link url="/architecture">Architecture Consulting</th-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <div>
                  <a href="https://medium.com/@codetherapy">Blog</a>
                </div>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <th-route-link url="/careers">Careers</th-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <div>
                  <a href="https://github.com/Theracode/engineering-code-of-conduct">Code of Conduct</a>
                </div>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <th-route-link url="/contact">Contact</th-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <th-route-link url="/culture">Culture</th-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <th-route-link url="/engineering">Engineering Consulting</th-route-link>
                </ion-menu-toggle>
              <ion-menu-toggle>
                <th-route-link url="/solutions">Solutions</th-route-link>
                </ion-menu-toggle>
              <ion-menu-toggle>
                <th-route-link url="/training">Training &amp; Workshops</th-route-link>
              </ion-menu-toggle>
            </div>
          </ion-menu>
          <div main></div>
        </div>,
    ];
  }
}

