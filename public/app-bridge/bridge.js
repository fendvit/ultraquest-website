/*
 * Shared helpers for the app-bridge pages. Plain ES5 on purpose — no build step,
 * these files are served straight from public/.
 */
(function () {
  // The app registers this custom scheme (its real, already-published package
  // id); DeepLinkHandler in the app routes com.lovable.ultrarunquest://<path>.
  var SCHEME = 'com.lovable.ultrarunquest://';
  var ua = navigator.userAgent;
  var isAndroid = /Android/i.test(ua);
  var isIOS = /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  window.UQ = {
    isMobile: isAndroid || isIOS,
    storeUrl: isAndroid
      ? 'https://play.google.com/store/apps/details?id=com.lovable.ultrarunquest'
      : '/',
    // path like "/activity/123?x=1" -> com.lovable.ultrarunquest://activity/123?x=1
    appLink: function (path) {
      return SCHEME + String(path || '').replace(/^\/+/, '');
    },
    params: function () {
      var hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
      var query = new URLSearchParams(window.location.search);
      return {
        hash: hash,
        query: query,
        get: function (k) { return hash.get(k) || query.get(k); },
      };
    },
    $: function (id) { return document.getElementById(id); },
    show: function (id, on) { document.getElementById(id).hidden = on === false; },
    text: function (id, value) { document.getElementById(id).textContent = value; },
    // Don't leave auth tokens sitting in the address bar / history.
    clearHash: function () {
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    },
  };
})();
