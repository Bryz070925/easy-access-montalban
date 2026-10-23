// Offline support: cache the app shell so hotlines and requirements
// are still available without signal. Bump VERSION when files change.
var VERSION = "easy-access-v13";
var FILES = ["./", "index.html", "styles.css", "app.js", "config.js", "icons.js", "data.js", "manifest.json", "img/montalban-logo.jpg", "icons/icon-192.png", "icons/icon-512.png", "img/hero-landscape.svg",
  "fonts/montserrat-latin-500-normal.woff2", "fonts/montserrat-latin-700-normal.woff2",
  "fonts/montserrat-latin-800-normal.woff2", "fonts/montserrat-latin-900-normal.woff2",
  "fonts/kaushan-script-latin-400-normal.woff2"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Network first (so updates show up), fall back to cache when offline.
// cache: "no-cache" makes the browser check the server instead of reusing
// its HTTP cache, which GitHub Pages lets it keep for 10 minutes.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  // Never touch database calls (they carry an API key and private data).
  if (e.request.headers.has("apikey") || e.request.headers.has("authorization")) return;
  e.respondWith(
    fetch(e.request.url, { cache: "no-cache" }).then(function (res) {
      var copy = res.clone();
      caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) { return hit || caches.match("index.html"); });
    })
  );
});
