const CACHE_NAME = 'somatrack-v3-cache';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
  // Adicione aqui outros ficheiros se existirem (ex: style.css, script.js)
];

// Instalação do Service Worker e caching inicial
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar as requisições e responder com a cache (Offline First)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Retorna da cache se existir
        }
        return fetch(event.request); // Caso contrário, busca na rede
      })
  );
});
