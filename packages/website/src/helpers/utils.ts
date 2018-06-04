
export function dismissPopover() {
  const popoverController = document.querySelector('ion-popover-controller');
  popoverController.getTop() && popoverController.dismiss();
}

export function navigate(url: string) {
  document.querySelector('th-router').activateRoute(url, true);
}