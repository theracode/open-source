import { Component, Element, Method, Prop } from '@stencil/core';

@Component({
  tag: 'th-route',
  styleUrl: 'th-route.css'
})
export class ThRoute {

  @Element() element: HTMLElement;
  @Prop() url = '';
  @Prop() component = '';
  @Prop({ context: 'isServer'}) isServer : boolean;
  private activeRoute = false;

  @Method()
  isMatch(url: string) {
    return url === this.url;
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
  
  if (route.isMatch(location.pathname) && route.isServer) {
    // if it's SSR or pre-render, just return the component
    route.setActive(true);
    return <route.component></route.component>
  }
}
