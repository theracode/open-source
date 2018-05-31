

export interface RouteLinkClickEvent extends CustomEvent {
  target: HTMLThRouteLinkElement;
  detail: RouteLinkClickEventDetail;
}

export interface RouteLinkClickEventDetail {
  url: string;
}

export interface MatchOptions {
  path?: string | string[];
  exact?: boolean;
  strict?: boolean;
}

export interface MatchResults {
  path: string;
  url: string;
  isExact: boolean;
  params: {
    [key: string]: string
  };
}
