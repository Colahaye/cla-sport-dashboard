// Service Worker — CLA Sport Dashboard
// Force le rechargement des fichiers critiques à chaque visite (no CDN cache)

const CRITICAL = [/sport_data\.js/, /\.html(\?.*)?$/];

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  if (CRITICAL.some(p => p.test(url))) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(() => fetch(event.request))
    );
  }
});
