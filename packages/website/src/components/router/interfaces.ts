

export interface RouteLinkClickEvent extends CustomEvent {
  target: HTMLThRouteLinkElement;
  detail: RouteLinkClickEventDetail;
}

export interface RouteLinkClickEventDetail {
  url: string;
}