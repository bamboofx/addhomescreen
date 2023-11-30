// service-worker.js
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  './',
    './shortcut.html',
  // Add other static assets and pages you want to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
