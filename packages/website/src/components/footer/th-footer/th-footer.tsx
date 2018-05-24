import { Component } from '@stencil/core';

@Component({
  tag: 'th-footer',
  styleUrl: 'th-footer.css',
  
})
export class ThFooter {
  
  render() {
    return [
      <div class="grid">
        <th-footer-links></th-footer-links>
        <th-footer-mailing-list></th-footer-mailing-list>
        <div class="footer">© 2018 Theracode LLC</div>
      </div>,
    ];
  }
}

