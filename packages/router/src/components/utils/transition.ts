import { MatchResults } from '../interfaces';

export function trimUrl(url: string) {
  // this is super hacky but it works for now
  return url.endsWith('/') && url.length > 1 ? url.substring(0, url.length - 1) : url;
}

export function transitionViews(tagName: string, match: MatchResults, currentRoute: HTMLThRouteElement, futureRoute: HTMLThRouteElement) {
  return addElementToDom(tagName, match, futureRoute).then((_newElement: HTMLElement) => {
    return doTransition(currentRoute, futureRoute);
  }).then(() => {
    if (currentRoute) {
      currentRoute.setActive(false);
    }
    futureRoute.setActive(true);
  });
}

export function addElementToDom(tagName: string, match: MatchResults, futureRoute: HTMLThRouteElement) {
  const element = document.createElement(tagName);
  element.classList.add(HIDE_HOST_ELEMENT);
  element['match'] = match;
  if (match) {
    // Spread the match params into the component properties.
    Object.keys(match.params).forEach((p) => element[p] = match.params[p]);
  }
  futureRoute.appendChild(element);

  const promise = (element as any).componentOnReady ? (element as any).componentOnReady() : Promise.resolve();
  return promise.then(() => {
    if (element.lastChild) {
      (element.lastChild as HTMLElement).classList.add(HIDE_INTERNAL_VIEW);
    }
    element.classList.remove(HIDE_HOST_ELEMENT);
    return element;
  });
}

export function doTransition(currentRoute: HTMLThRouteElement, futureRoute: HTMLThRouterElement) {
  return new Promise((resolve) => {
    scrollTo(0, 0);

    // this is super ugly, refactor eventually
    if (futureRoute.lastChild && futureRoute.lastChild.lastChild) {
      const newInternalView = futureRoute.lastChild.lastChild as HTMLElement;
      newInternalView.classList.remove(HIDE_INTERNAL_VIEW);
      newInternalView.classList.add(SHOW_INTERNAL_VIEW);
    }

    if (currentRoute && currentRoute.lastChild) {
      (currentRoute.lastChild as HTMLElement).classList.add(HIDE_HOST_ELEMENT);
      (currentRoute.lastChild as HTMLElement).classList.add(HIDE_INTERNAL_VIEW);
    }
    requestAnimationFrame(() => {
      // sweet, another frame has passed, so go ahead and clean up
      if (currentRoute && currentRoute.lastChild) {
        currentRoute.removeChild(currentRoute.lastChild);
      }
      if (futureRoute.lastChild.lastChild) {
        (futureRoute.lastChild.lastChild as HTMLElement).classList.remove(SHOW_INTERNAL_VIEW);
      }

      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}


const HIDE_HOST_ELEMENT = 'hide-host';
const HIDE_INTERNAL_VIEW = 'hide-internal';
const SHOW_INTERNAL_VIEW = 'show-internal';
