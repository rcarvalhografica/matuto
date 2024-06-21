importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");

workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    ({ request }) => request.destination === "script",
    new workbox.strategies.NetworkFirst()
);

if (!('showNotification' in swReg.prototype)) {
    console.warn('Notifications aren\'t supported.');
    return;
}
if (Notification.permission === 'denied') {
    console.warn('The user has blocked notifications.');
    return;
}
