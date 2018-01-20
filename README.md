# hexdump

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
