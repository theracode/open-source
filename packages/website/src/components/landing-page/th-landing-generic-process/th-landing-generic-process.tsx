import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'th-landing-generic-process',
  styleUrl: 'th-landing-generic-process.css',
})
export class ThLandingGenericProcess {

  @Prop() imagePath: string;
  @Prop() titleText: string;
  @Prop() bodyContent: string;
  @Prop() buttonClass = '';
  @Prop() titleClass = '';
  @Prop() url = '';

  render() {
    return (
      <div class="container">
        <div class="img-container">
          <img class="icon" src={this.imagePath} decoding="async"></img>
        </div>
        <h1>{this.titleText}</h1>
        <div class="body">
        {this.bodyContent}
        </div>
        <div class="btn-container">
          <th-route-link url={this.url}>
            <ion-button class={this.buttonClass}>Learn More</ion-button>
          </th-route-link>
        </div>
      </div>
    );
  }
}

