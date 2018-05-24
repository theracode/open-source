import { Component, Element, Method, Prop } from '@stencil/core';
import { QueueApi } from '@stencil/core/dist/declarations';
import { skipTwoFrames } from './util';

@Component({
  tag: 'th-router-outlet',
  styleUrl: 'th-router-outlet.css'
})
export class ThRouterOutlet {

  @Element() element: HTMLElement;
  @Prop({ context: 'queue'}) queue: QueueApi;

  private currentlyActive: HTMLElement = null;
  private futureActive: HTMLElement = null;
  
  @Method()
  async activateComponent(tagName: string) {
    

    if (!this.currentlyActive) {
      // okay cool, this is the first time the app is loaded, check if it was SSR'd
      const element = this.element.querySelector(tagName) as HTMLElement;
      if (element) {
        // we've got the element, so just return for now I guess
        this.currentlyActive = element;
        return new Promise((resolve) => {
          
          window.scrollTo(0, 0);
          
          setTimeout(() => {
            this.queue.write(() => {
              
              setTimeout(() => {
                this.queue.write(() => {
                  element.classList.remove(HIDDEN_COMPONENT);
                  resolve();
                });
              }, 5);
            });
          }, 5);
        });
      }
    }

    this.futureActive = document.createElement(tagName) as HTMLElement;
    this.futureActive.classList.add(HIDDEN_COMPONENT);
    this.element.appendChild(this.futureActive);
    if ((this.futureActive as any).componentOnReady) {
      await (this.futureActive as any).componentOnReady();
    }

    await skipTwoFrames(this.queue.read);
    
    // okay, cool, we've chill out for a hot minute, we've read some frames
    // and measured ourselves up good and nice

    await this.showTopView();
  }

  private showTopView() {
    return new Promise((resolve) => {
      this.queue.write(() => {
        window.scrollTo(0, 0);
        if (this.currentlyActive) {
          this.element.removeChild(this.currentlyActive);
        }
        this.futureActive.classList.remove(HIDDEN_COMPONENT);
        setTimeout(() => {
          this.currentlyActive = this.futureActive;
          this.futureActive = null;
          this.queue.write(resolve);
        }, 1);
      })
    });
  }

  render() {
    return []
  }
}

const HIDDEN_COMPONENT = 'hidden-component';


