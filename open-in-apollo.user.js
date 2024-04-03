// ==UserScript==
// @name         Redirect to Apollo App
// @match        *://*.reddit.com/*
// @run-at       document-start
// ==/UserScript==
if (window.location.pathname === '/redirect') return;

const apolloRedirect = () => {
  if (location.protocol !== 'apollo:')
    location.replace('apollo://' + location.href.split('//')[1]);
};

apolloRedirect();
