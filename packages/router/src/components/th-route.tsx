import { Component, Element, Method, Prop } from '@stencil/core';
import { matchPath } from './utils';
import { MatchResults } from './interfaces';

@Component({
  tag: 'th-route',
  styleUrl: 'th-route.css'
})
export class ThRoute {

  @Element() element: HTMLElement;
  @Prop() url = '';
  @Prop() component = '';
  @Prop() exact = false;
  @Prop({ context: 'isServer'}) isServer: boolean;
  @Prop({ context: 'location' }) location: Location;

  private activeRoute = false;

  @Method()
  isMatch(pathname: string): MatchResults {
    return matchPath(pathname, {
      path: this.url,
      exact: this.exact,
      strict: true
    });
  }

  @Method()
  isActive() {
    return this.activeRoute;
  }

  @Method()
  setActive(active: boolean) {
    this.activeRoute = active;
  }

  render() {
    return render(this);
  }
}

export function render(route: ThRoute) {
  const match = route.isMatch(route.location.pathname);
  if (match && route.isServer) {
    // if it's SSR or pre-render, just return the component
    route.setActive(true);

    // We can provide a component props attribute like stencil-router does, and pass that through here,
    // and in the transitionView method in router.
    const componentProps = {
      location: route.location,
      match,
      isActive: route.isActive,
      isServer: route.isServer,
      ...match.params, // Spread the match params into the component properties.
    };

    return <route.component {...componentProps}></route.component>;
  }
}
