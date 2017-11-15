// Nymph Node Client

// (really, it's just the browser client with some Node libraries to supply fake
// browser globals.)

// Do aliases to get around Node modules.
const nymphPath = require.resolve('nymph-client').replace(/lib\/Nymph(?:\.js)?$/, '');
const alias = require('module-alias');
alias.addAliases({
  'Nymph': nymphPath + 'lib/Nymph',
  'NymphEntity': nymphPath + 'lib/Entity',
  'NymphPubSub': nymphPath + 'lib/PubSub',
  'Entity': nymphPath + 'lib/Entity',
  'PubSub': nymphPath + 'lib/PubSub'
});

// Nymph expects the global browser objects XMLHttpRequest and WebSocket.
global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
global.WebSocket = require('websocket').w3cwebsocket;
// And sometimes we need the XHR object to support cookies.
const enableCookies = () => {
  const xhrc = require("xmlhttprequest-cookie");
  global.XMLHttpRequest = xhrc.XMLHttpRequest;
};

const Nymph = require('Nymph').Nymph;
const PubSub = require('NymphPubSub').PubSub;

// Make a shortcut for PubSub init.
const _init = Nymph.init;
Nymph.init = (nymphOptions) => {
  _init.call(Nymph, nymphOptions);
  if (nymphOptions.pubsubURL) {
    PubSub.init(nymphOptions);
  }
};

module.exports = {Nymph, enableCookies};
