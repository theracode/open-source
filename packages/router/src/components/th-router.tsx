import { Component, Element, Listen, Method, Prop } from '@stencil/core';
import { QueueApi } from '@stencil/core/dist/declarations';
import { MatchResults, RouteLinkClickEvent, TransitionOptions } from './interfaces';
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

  @Method()
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
      let currentRoute: HTMLThRouteElement = null;
      let futureRoute: HTMLThRouteElement = null;

      for (const route of routesArray) {
        // find the active route
        if (route.isActive()) {
          currentRoute = route;
        }

        const routeMatch = route.isMatch(newUrl);
        if (routeMatch) {
          futureRoute = route;
          tagName = route.component;
          match = routeMatch;
        }

        if (tagName && currentRoute && futureRoute) {
          break;
        }
      }

      if (currentRoute === futureRoute) {
        // the future view is already active, so just return for now
        return;
      }

      // okay cool, we have the tagname and the currently active route, so we can do a transition
      if (!tagName || !futureRoute) {
        throw new Error(`Could not find a match route for: ${newUrl}`);
      }

      const options: TransitionOptions = {
        tagName,
        match,
        currentRoute,
        futureRoute,
        isServer: this.isServer,
        location: this.location,
      };

      return transitionViews(options);

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

