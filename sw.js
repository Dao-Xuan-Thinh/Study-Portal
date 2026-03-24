/* Study Portal — Service Worker (cache-first with network fallback) */
var CACHE_NAME = 'study-portal-v1';
var PRECACHE = ['./index.html'];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(c){ return c.addAll(PRECACHE); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  var url = e.request.url;
  if(url.startsWith('chrome-extension:') || url.startsWith('data:')) return;
  e.respondWith(
    caches.match(e.request).then(function(cached){
      var networkFetch = fetch(e.request).then(function(resp){
        if(resp && resp.status === 200 && resp.type !== 'opaque'){
          var clone = resp.clone();
          caches.open(CACHE_NAME).then(function(c){ c.put(e.request, clone); });
        }
        return resp;
      }).catch(function(){ return cached; });
      return cached || networkFetch;
    })
  );
});
