import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'th-landing-generic-process',
  styleUrl: 'th-landing-generic-process.css',
})
export class ThLandingGenericProcess {

  @Prop() imagePath: string;
  @Prop() titleText: string;
  @Prop() bodyContent: string;
  @Prop() buttonClass: string = '';
  @Prop() titleClass: string = '';
  
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
          <ion-button class={this.buttonClass}>Learn More</ion-button>
        </div>
      </div>
    )
  }
}

