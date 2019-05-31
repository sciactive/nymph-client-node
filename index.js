// Nymph Node Client

// (really, it's just the browser client with some Node libraries to supply fake
// browser globals.)

// Nymph expects the global browser objects XMLHttpRequest and WebSocket.
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
global.WebSocket = require('websocket').w3cwebsocket;
// And sometimes we need the XHR object to support cookies.
const enableCookies = () => {
  const xhrc = require('xmlhttprequest-cookie');
  global.XMLHttpRequest = xhrc.XMLHttpRequest;
};

const NymphClient = require('nymph-client');
const { Nymph, PubSub } = NymphClient;

// Make a shortcut for PubSub init.
const _init = Nymph.init;
Nymph.init = nymphOptions => {
  _init.call(Nymph, nymphOptions);
  if (nymphOptions.pubsubURL) {
    PubSub.init(nymphOptions);
  }
};

module.exports = { Nymph, PubSub, enableCookies, ...NymphClient };
