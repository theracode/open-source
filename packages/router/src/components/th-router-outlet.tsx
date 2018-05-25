import { Component, Element, Method, Prop } from '@stencil/core';
import { QueueApi } from '@stencil/core/dist/declarations';

@Component({
  tag: 'th-router-outlet',
  styleUrl: 'th-router-outlet.css'
})
export class ThRouterOutlet {

  @Element() element: HTMLElement;
  @Prop({ context: 'queue'}) queue: QueueApi;
  @Prop({ context: 'isServer'}) isServer : boolean;
  private activeView: HTMLElement;

  @Method()
  async transitionView(enteringTag: string): Promise<any> {
    const futureElement = this.element.querySelector(enteringTag) as HTMLElement;
    if (futureElement) {
      // this tag already exists in the outlet, just punt baby
      this.activeView = futureElement;
      return;
    }
    
    this.activeView = await transitionView(enteringTag, this.element, this.activeView, this.isServer);
  }
  
  render(): any[] {
    return [];
  }
}

async function transitionView(enteringTag: string, parentElement: HTMLElement, activeView: HTMLElement, isServer: boolean) {

  // okay cool, the first thing we should do is add the element to the dom and hide it
  const newElement = await addElementToDom(enteringTag, parentElement);
  await doTransition(newElement, activeView, isServer);
  return newElement;
}

async function addElementToDom(enteringTag: string, parent: HTMLElement) {
  const element = document.createElement(enteringTag);
  element.classList.add(HIDE_HOST);
  parent.appendChild(element);
  if ((element as any).componentOnReady) {
    await (element as any).componentOnReady();
  }
  if (element.lastChild) {
    (element.lastChild as HTMLElement).classList.add(HIDE_VIEW);
  }
  element.classList.remove(HIDE_HOST);
  return element;
}


function doTransition(futureView: HTMLElement, currentView: HTMLElement, isServer: boolean) {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      if (!isServer) {
        scrollTo(0, 0);
      }
      if (futureView.lastChild) {
        (futureView.lastChild as HTMLElement).classList.remove(HIDE_VIEW);
        (futureView.lastChild as HTMLElement).classList.add(SHOW_VIEW);
      }
      
      if (currentView) {
        currentView.classList.add(HIDE_HOST);
        (currentView.lastChild as HTMLElement).classList.add(HIDE_VIEW);
      }
      requestAnimationFrame(() => {
        // sweet, another frame has passed, so go ahead and clean up
        if (currentView) {
          currentView.parentElement.removeChild(currentView);
        }
        if (futureView.lastChild) {
          (futureView.lastChild as HTMLElement).classList.remove(SHOW_VIEW);
        }
        resolve();
      });
    });
  });
}

const HIDE_HOST = 'hide-host';
const HIDE_VIEW = 'hide-view';
const SHOW_VIEW = 'show-view';