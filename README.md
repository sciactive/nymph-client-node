# Nymph Node Client - collaborative app data

[![Latest Stable Version](https://img.shields.io/npm/v/nymph-client-node.svg?style=flat)](https://www.npmjs.com/package/nymph-client-node) [![License](https://img.shields.io/npm/l/nymph-client-node.svg?style=flat)](https://www.npmjs.com/package/nymph-client-node) [![Open Issues](https://img.shields.io/github/issues/sciactive/nymph-client-node.svg?style=flat)](https://github.com/sciactive/nymph-client-node/issues)

Nymph is an object data store that is easy to use in JavaScript and PHP.

## Installation

You can install Nymph Node Client with NPM.

```sh
npm install --save nymph-client-node
```

This repository is the JavaScript client for Node. There is also a **[browser client](https://github.com/sciactive/nymph-client)**.  For more information, you can see the [main Nymph repository](https://github.com/sciactive/nymph).

The Nymph client requires some browser globals that Node doesn't provide, so this client sets up some globals to provide them.

It also sets up Nymph.init to also call PubSub.init with your configs, so you don't need to set up PubSub yourself.

## Setting up Nymph in Node.js

<div dir="rtl">Quick Setup with NPM</div>

```sh
npm install --save nymph-client-node
```

To use, require it as the Nymph object:

```js
const Nymph = require('nymph-client-node');
```

Then provide the options to Nymph.init:

```js
Nymph.init({
  restURL: 'https://yournymphrestserver/path/to/your/rest.php',
  pubsubURL: 'wss://yournymphpubsubserver:8080',
  rateLimit: 100
});
```

Now include your entity classes, such as `Todo`, and you can write queries and subscribe to them:

```js
Nymph.getEntities({'class': Todo.class}, {'type': '&', 'strict': ['name', 'Foobar']}).subscribe((todos) => {
  console.log("\nNew Foobar Todo Updates: ", todos);
});

const myTodo = new Todo();
myTodo.set({
  name: "Foobar",
  done: false
});
myTodo.save().then(() => {
  alert("You've got new todos!");
});
```

For a thorough step by step guide to setting up Nymph on your own server, visit the [Setup Guide](https://github.com/sciactive/nymph/wiki/Setup-Guide).

## API Docs

Check out the [API Docs in the wiki](https://github.com/sciactive/nymph/wiki/API-Docs).
