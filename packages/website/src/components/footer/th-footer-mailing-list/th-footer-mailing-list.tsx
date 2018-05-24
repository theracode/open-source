import { Component } from '@stencil/core';

@Component({
  tag: 'th-footer-mailing-list',
  styleUrl: 'th-footer-mailing-list.css',
  
})
export class ThFooterMailingList {
  
  render() {
    return [
      <div class="container">
        <mailing-list></mailing-list>
      </div>
    ];
  }
}

