import { Component, Event, EventEmitter, Prop, Listen } from '@stencil/core';
import { RouteLinkClickEventDetail } from './interfaces';

@Component({
  tag: 'th-route-link',
})
export class ThRouteLink {

  @Event() routeLinkClicked: EventEmitter<RouteLinkClickEventDetail>;

  @Prop() url = "/";

  @Listen('click')
  handleClick(event: Event) {
    event.preventDefault();
    this.routeLinkClicked.emit({ url: this.url});
  }

  render() {
    return <a href={this.url}>
      <slot></slot>
    </a>
  }
}