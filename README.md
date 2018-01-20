# hexdump

[![build status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]

A single, simple function to generate xxd-style hex dump text.

## Installation

```shell
npm i --save @buzuli/hexdump
```

## Example

```javascript
const fs = require('fs')
const hexdump = require('@buzuli/hexdump')
console.info(hexdump(fs.readFileSync('package.json')))
```

[travis-url]: https://travis-ci.org/joeledwards/node-hexdump
[travis-image]: https://img.shields.io/travis/joeledwards/node-hexdump/master.svg

[npm-url]: http://www.npmjs.com/package/@buzuli/hexdump
[npm-image]: http://img.shields.io/npm/v/@buzuli/hexdump.svg
