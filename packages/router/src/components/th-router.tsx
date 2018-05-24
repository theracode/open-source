import { Component, Element, Listen, Prop } from '@stencil/core';
import { QueueApi } from '@stencil/core/dist/declarations';
import { RouteLinkClickEvent } from './interfaces';
import { RouterState } from './router-state';

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
    newUrl = newUrl.endsWith('/') && newUrl.length > 1 ? newUrl.substring(0, newUrl.length - 1) : newUrl;
    const routes = this.element.querySelectorAll('th-route');
    const outlet = this.element.querySelector('th-router-outlet');
    const promises: Promise<any>[] = [];
    const routesArray = Array.from(routes);

    for (const route of routesArray) {
      if (route.isMatch(newUrl)) {
        // it's a new view, huzzah
        route.setState(RouterState.PENDING);
        promises.push(outlet.activateComponent(route.component));
      }
    }

    await Promise.all(promises);
    for (const route of routesArray) {
      const state = route.getState() === RouterState.PENDING ? RouterState.ACTIVE : RouterState.INACTIVE;
      route.setState(state);
    }

    if (push) {
      window.history.pushState(null, null, newUrl);
    }
  }

  componentDidLoad() {
    window.onpopstate = (_event: PopStateEvent) => {
      return this.activateRoute(window.location.pathname, false);
    };
    return this.activateRoute(window.location.pathname, false);
  }

  render() {
    return [
      <th-router-outlet></th-router-outlet>,
      <slot></slot>
    ];
  }
}
