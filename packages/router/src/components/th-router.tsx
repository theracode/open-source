import { Component, Element, Listen, Prop } from '@stencil/core';
import { QueueApi } from '@stencil/core/dist/declarations';
import { RouteLinkClickEvent } from './interfaces';

@Component({
  tag: 'th-router',
})
export class ThRouter {

  @Element() element: HTMLElement;
  @Prop({ context: 'queue'}) queue: QueueApi;

  @Listen('body:routeLinkClicked', { passive: true})
  handleLinkClick(event: RouteLinkClickEvent) {
    return this.activateRoute(event.detail.url, true);
  }

  async activateRoute(newUrl: string, push: boolean) {
    const routes = this.element.querySelectorAll('th-route');
    const routesArray = Array.from(routes);
    
    const hydrationPromises: Promise<any>[] = [];
    const outlet = this.element.querySelector('th-router-outlet');
    hydrationPromises.push(outlet.componentOnReady());
    for (const route of routesArray) {
      hydrationPromises.push(route.componentOnReady());
    }
    await Promise.all(hydrationPromises);
    
    let tagName: string = null;
    for (const route of routesArray) {
      if (route.isMatch(newUrl)) {
        tagName = route.component;
        break;
      }
    }

    if (tagName) {
      await outlet.transitionView(tagName);
    } 

    if (push) {
      window.history.pushState(null, null, newUrl);
    }
  }

  componentDidLoad() {
    window.onpopstate = (_event: PopStateEvent) => {
      return this.activateRoute(trimUrl(window.location.pathname), false);
    };
    return this.activateRoute(trimUrl(window.location.pathname), false);
  }

  render() {
    return [
      <th-router-outlet></th-router-outlet>,
      <slot></slot>
    ];
  }
}

export function trimUrl(url: string) {
  // this is super hacky but it works for now
  return url.endsWith('/') && url.length > 1 ? url.substring(0, url.length - 1) : url;
}