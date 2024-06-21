importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");

workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    ({ request }) => request.destination === "script",
    new workbox.strategies.NetworkFirst()
);

navigator.serviceWorker.ready.then((swReg) => {
   // Do we already have a push message subscription?
   swReg.pushManager.getSubscription()
   .then((subscription) => {
       if(!subscription){
          console.log('No Subscription endpoint present')
       }
   })
})
