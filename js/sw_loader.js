/* checks if current browser has support for service workers.*/

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
   .then(function() {
       console.log('service worker loaded');
   })
   .catch(function() {
       console.log('service workers not supported');
   });
}