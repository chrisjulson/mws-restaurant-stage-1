let CacheName = 'restaurant-static-v1';

/* used to grab all the things to put in the cache for both ofline and quick loading of content */
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CacheName).then(function(cache) {
          return cache.addAll([
              './',
              './index.html',
              './restaurant.html',
              './css/styles.css',
              './data/restaurants.json',
              './js/dbhelper.js',
              './js/main.js',
              './js/restaurant_info.js',
              './js/sw_register.js',
              './img/1.jpg',
              './img/2.jpg',
              './img/3.jpg',
              './img/4.jpg',
              './img/5.jpg',
              './img/6.jpg',
              './img/7.jpg',
              './img/8.jpg',
              './img/9.jpg',
              './img/10.jpg'
          ]);
      })
   );
});

/* function to wait untill a new service worker is ready and activated then delete the old  */
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys()
      .then(function(cacheNames) {
          return Promise.all(
            cacheNames.filter(function(cacheName) {
                return cacheName.startsWith('restaurant-') && cacheName != cacheNames;
            }).map(function(cacheName) {
                return caches.delete(cacheName);
            })
         );
      })
   );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
          return response || fetch(event.request);
      })
   );
});