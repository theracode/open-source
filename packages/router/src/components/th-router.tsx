import { Component, Element, Listen, Prop } from '@stencil/core';
import { QueueApi } from '@stencil/core/dist/declarations';
import { MatchResults, RouteLinkClickEvent } from './interfaces';
import { transitionViews, trimUrl } from './utils';

@Component({
  tag: 'th-router',
})
export class ThRouter {

  @Element() element: HTMLElement;
  @Prop({ context: 'queue'}) queue: QueueApi;
  @Prop({ context: 'isServer'}) isServer: boolean;
  @Prop({ context: 'location' }) location: Location;

  @Listen('body:routeLinkClicked', { passive: true})
  handleLinkClick(event: RouteLinkClickEvent) {
    return this.activateRoute(event.detail.url, true);
  }

  activateRoute(newUrl: string, push: boolean): Promise<any> {
    if (this.isServer) {
      return Promise.resolve();
    }

    const routes = this.element.querySelectorAll('th-route');
    const routesArray = Array.from(routes);

    const hydrationPromises: Promise<any>[] = [];
    for (const route of routesArray) {
      hydrationPromises.push(route.componentOnReady());
    }

    return Promise.all(hydrationPromises).then(() => {
      let tagName: string = null;
      let match: MatchResults = null;
      let currentlyActiveRoute: HTMLThRouteElement = null;
      let futureActiveRoute: HTMLThRouteElement = null;

      for (const route of routesArray) {
        // find the active route
        if (route.isActive()) {
          currentlyActiveRoute = route;
        }

        const routeMatch = route.isMatch(newUrl);
        if (routeMatch) {
          futureActiveRoute = route;
          tagName = route.component;
          match = routeMatch;
        }

        if (tagName && currentlyActiveRoute && futureActiveRoute) {
          break;
        }
      }

      if (currentlyActiveRoute === futureActiveRoute) {
        // the future view is already active, so just return for now
        return;
      }

      // okay cool, we have the tagname and the currently active route, so we can do a transition
      if (!tagName || !futureActiveRoute) {
        throw new Error(`Could not find a match route for: ${newUrl}`);
      }

      return transitionViews(tagName, match, currentlyActiveRoute, futureActiveRoute);

    }).then(() => {
      if (push) {
        window.history.pushState(null, null, newUrl);
      }
    });
  }

  componentDidLoad() {
    window.onpopstate = (_event: PopStateEvent) => {
      return this.activateRoute(trimUrl(this.getLocation().pathname), false);
    };
    return this.activateRoute(trimUrl(this.getLocation().pathname), false);
  }

  getLocation() {
    return this.isServer ? this.location : window.location;
  }

  render() {
    return [
      <slot></slot>
    ];
  }
}
