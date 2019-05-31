# Nymph Node Client - collaborative app data

[![Latest Stable Version](https://img.shields.io/npm/v/nymph-client-node.svg)](https://www.npmjs.com/package/nymph-client-node) [![Open Issues](https://img.shields.io/github/issues/sciactive/nymph-client-node.svg)](https://github.com/sciactive/nymph-client-node/issues) [![License](https://img.shields.io/github/license/sciactive/nymph-client-node.svg)]()

Nymph is an object data store for JavaScript and PHP.

## Installation

```sh
npm install --save nymph-client-node
```

This repository is the JavaScript client for Node. There is also a **[browser client](https://github.com/sciactive/nymph-client)**.  For more information, you can see the [main Nymph repository](https://github.com/sciactive/nymph).

The Nymph client requires some browser globals that Node doesn't provide, so this client sets up some globals to provide them.

It also sets up Nymph.init to also call PubSub.init with your configs, so you don't need to set up PubSub yourself.

## Usage

To use, require it instead of `nymph-client`:

```js
const { Nymph } = require('nymph-client-node');
```

Or, if you need cookie support (like, if you're using [Tilmeld](http://tilmeld.org/)):

```js
const NymphNode = require('nymph-client-node');
NymphNode.enableCookies();
const { Nymph } = NymphNode;
```

Then provide the options to Nymph.init:

```js
Nymph.init({
  restURL: 'https://yournymphrestserver/path/to/your/rest.php',
  pubsubURL: 'wss://yournymphpubsubserver'
});
```

For a thorough step by step guide to setting up Nymph on your own server, visit the [Setup Guide](https://github.com/sciactive/nymph/wiki/Setup-Guide).

## API Docs

Check out the [API Docs in the wiki](https://github.com/sciactive/nymph/wiki/API-Docs).
