# Nymph Node Client - collaborative app data

[![Latest Stable Version](https://img.shields.io/npm/v/nymph-client-node.svg)](https://www.npmjs.com/package/nymph-client-node) [![Open Issues](https://img.shields.io/github/issues/sciactive/nymph-client-node.svg)](https://github.com/sciactive/nymph-client-node/issues) [![License](https://img.shields.io/github/license/sciactive/nymph-client-node.svg)]()

Powerful object data storage and querying for collaborative web apps.

## Deprecation Notice

The PHP implementation of Nymph/Tilmeld has been deprecated. It will no longer have any new features added. Instead, a new version of Nymph running on Node.js, written entirely in TypeScript will replace the PHP implementation. You can find it over at the [Nymph.js repo](https://github.com/sciactive/nymphjs).

## Installation

```sh
npm install --save nymph-client-node
```

This repository is the JavaScript client for Node. There is also a **[browser client](https://github.com/sciactive/nymph-client)**. For more information, you can see the [main Nymph repository](https://github.com/sciactive/nymph).

This package provides fetch and WebSocket ponyfills to Nymph, handles Tilmeld auth tokens, and sets up `Nymph.init` to also call `PubSub.init` with your configs if you provide a `pubsubURL`.

## Usage

To use, require it instead of `nymph-client`:

```js
const { Nymph } = require("nymph-client-node");
```

Then provide the options to Nymph.init:

```js
Nymph.init({
  restURL: "https://yournymphrestserver/path/to/your/rest.php",
  pubsubURL: "wss://yournymphpubsubserver",
});
```

For a thorough step by step guide to setting up Nymph on your own server, visit the [Setup Guide](https://github.com/sciactive/nymph/wiki/Setup-Guide).

## API Docs

Check out the [API Docs in the wiki](https://github.com/sciactive/nymph/wiki/API-Docs).
