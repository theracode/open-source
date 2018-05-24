import { Component } from '@stencil/core';

@Component({
  tag: 'th-footer-links',
  styleUrl: 'th-footer-links.css',
})
export class ThFooterLinks {
  
  render() {
    return [
      <div class="th-footer-links-grid">
        <div class="th-footer-links-icon-container">
          <img class="th-footer-links-img" src="/assets/images/logo.png"></img>
          <h1 class="th-footer-links-header">Theracode</h1>
        </div>
        <div class="th-footer-links-about-container">
          <ul class="th-footer-links-ul">
            <li>
              <th-route-link class="th-footer-links-a" url="/about">About</th-route-link>
            </li>
            <li>
              <th-route-link class="th-footer-links-a" url="/architecture">Architecture</th-route-link>
            </li>
            <li>
              <a class="th-footer-links-a" href="https://medium.com/@codetherapy">Blog</a>
            </li>
            <li>
              <th-route-link class="th-footer-links-a" url="/careers">Careers</th-route-link>
            </li>
            <li>
              <th-route-link class="th-footer-links-a" url="/contact">Contact</th-route-link>
            </li>
            <li>
              <a class="th-footer-links-a" href="https://github.com/Theracode/engineering-code-of-conduct">Code of Conduct</a>
            </li>
            
          </ul>
        </div>
        <div class="th-footer-links-team-container">
          <ul class="th-footer-links-ul">
            <li>
              <th-route-link class="th-footer-links-a" url="/culture">Culture</th-route-link>
            </li>
            <li>
              <th-route-link class="th-footer-links-a" url="/engineering">Engineering</th-route-link>
            </li>
            <li>
              <th-route-link class="th-footer-links-a" url="/">Home</th-route-link>
            </li>
            <li>
              <th-route-link class="th-footer-links-a" url="/solutions">Solutions</th-route-link>
            </li>
            <li>
              <th-route-link class="th-footer-links-a" url="/training">Training</th-route-link>
            </li>
          </ul>
        </div>
      </div>
    ];
  }
}

