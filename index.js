// Nymph Node Client

// Nymph expects fetch and WebSocket.
const WebSocket = require('websocket').w3cwebsocket;
const fetch = require('node-fetch');
const NymphClient = require('nymph-client');
const { Nymph, PubSub } = NymphClient;

// Make a shortcut for PubSub init.
const _init = Nymph.init;
Nymph.init = nymphOptions => {
  _init.call(Nymph, {
    fetch,
    ...nymphOptions
  });
  if (nymphOptions.pubsubURL) {
    PubSub.init({
      WebSocket,
      ...nymphOptions
    });
  }
};

// Save the Tilmeld auth token and send it in the header.
let authToken = null;
Nymph.on('request', (_url, options) => {
  if (authToken) {
    options.headers['X-TILMELDAUTH'] = authToken;
  }
});
Nymph.on('response', response => {
  if (response.headers.has('X-TILMELDAUTH')) {
    authToken = response.headers.get('X-TILMELDAUTH');
    if (authToken === '') {
      authToken = null;
    }
  }
});

module.exports = NymphClient;
