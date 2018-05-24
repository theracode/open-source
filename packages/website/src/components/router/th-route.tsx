import { Component, Element, Method, Prop } from '@stencil/core';
import { RouterState } from './router-state';

@Component({
  tag: 'th-route',
  styleUrl: 'th-route.css'
})
export class ThRoute {

  @Element() element: HTMLElement;
  @Prop() url = '';
  @Prop() component = '';
  private state = RouterState.INACTIVE;
  
  @Method()
  isMatch(newUrl: string) {
    return newUrl === this.url;
  }

  @Method()
  getState() {
    return this.state;
  }

  @Method()
  setState(state: number) {
    this.state = state;
  }

  render() {
    return []
  }
}


