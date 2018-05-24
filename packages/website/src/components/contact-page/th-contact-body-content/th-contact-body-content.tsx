import { Component } from '@stencil/core';

@Component({
  tag: 'th-contact-body-content',
  styleUrl: 'th-contact-body-content.css',
  
})
export class ThContactBodyContent {


  render() {
    return [
      <div class="container">
        <h1>Let's chat</h1>
        <form action="https://formspree.io/dan.bucholtz@gmail.com" method="POST">
          <div class="input-group">
            <h2>Name<span class="required">  *</span></h2>
            <input name="name" type="text" placeholder="Your Name" class="form-input" required/>
          </div>
          <div class="input-group">
            <h2>Email Address<span class="required">  *</span></h2>
            <input name="email" type="email" placeholder="Your Email Address" class="form-input" required/>
          </div>
          <div class="input-group">
            <h2>Message<span class="required">  *</span></h2>
            <textarea
              name="message"
              placeholder="Message"
              class="form-input"
              minlength="10"
              required/>
          </div>
          <input type="hidden" name="_subject" value="Theracode Contact Us"/>
          <div class="input-group">
            <ion-button type="submit" expand="block">Contact Us</ion-button>
          </div>
        </form>
      </div>

    ];
  }
}
