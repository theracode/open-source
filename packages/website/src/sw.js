importScripts('workbox-v3.2.0/workbox-sw.js')

self.workbox.skipWaiting();
self.workbox.clientsClaim();

self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([]);
