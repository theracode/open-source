
export function dismissPopover() {
  document.querySelector('ion-popover-controller').dismiss();
}

export function navigate(url: string) {
  document.querySelector('th-router').activateRoute(url, true);
}