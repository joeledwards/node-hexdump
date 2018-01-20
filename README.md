# hexdump

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

[npm-url]: http://www.npmjs.com/package/@buzuli/hexdump
[npm-image]: http://img.shields.io/npm/v/@buzuli/hexdump.svg
