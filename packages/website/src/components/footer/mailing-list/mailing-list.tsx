import { Component } from '@stencil/core';

@Component({
  tag: 'mailing-list',
  styleUrl: 'mailing-list.css',

})
export class MailingList {

  render() {
    return [
      <div class="container">
        <h1>Start Building Better Apps Today</h1>
        <p>Are you an enterprise building with Ionic? Do you want the best information and resources on how to ensure your project is successful? Sign up for our mailing list to have the very best Ionic in enterprise information sent directly to your inbox. We will never, under any circumstances, spam you or sell your info.</p>
        <form action="https://formspree.io/hi@theracode.io" method="POST">
          <div class="email-container">
            <input name="email" type="email" placeholder="Email Address" required/>
            <ion-button type="submit">Subscribe</ion-button>
            <input type="hidden" name="_subject" value="Theracode Mailing List"/>
          </div>
        </form>
      </div>
    ];
  }
}
