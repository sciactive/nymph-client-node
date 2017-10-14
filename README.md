# <img alt="logo" src="https://raw.githubusercontent.com/sciactive/2be-extras/master/logo/product-icon-40-bw.png" align="top" /> Nymph - Node Client Files

This repository contains the node client files required by Nymph. For a directory of all official Nymph repositories, check out the [main Nymph repository](https://github.com/sciactive/nymph).

## Nymph Node Client

The Nymph client requires some browser globals that Node doesn't provide, so this repository sets up some globals to provide them.

It also sets up Nymph.init to also call PubSub.init with your configs, so you don't need to set up PubSub yourself.

## How to Install and Use Nymph in Node

To install, use npm:

```js
npm install --save nymph-client-node
```

To use, require it as the Nymph object:

```js
const Nymph = require('nymph-client-node');
```

Then provide the options to Nymph.init:

```js
Nymph.init({
  restURL: 'http://...',
  pubsubURL: 'ws://...',
  rateLimit: 100
});
```

Now include your entity classes, such as `Todo`, and you can write queries and subscribe to them:

```js
Nymph.getEntities({'class': Todo.class}, {'type': '&', 'strict': ['name', 'Foobar']}).subscribe((todos) => {
  console.log("\nNew Foobar Todo Updates: ", todos);
});
```
