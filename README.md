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

## Sample Output
```
00000000: 7b0a 2020 226e 616d 6522 3a20 2240 6275  {..."name":."@bu
00000016: 7a75 6c69 2f68 6578 6475 6d70 222c 0a20  zuli/hexdump",..
00000032: 2022 7665 7273 696f 6e22 3a20 2231 2e30  ."version":."1.0
00000048: 2e33 222c 0a20 2022 6465 7363 7269 7074  .3",..."descript
00000064: 696f 6e22 3a20 2273 696d 706c 6520 6865  ion":."simple.he
00000080: 7875 6d70 2066 756e 6374 696f 6e20 666f  xump.function.fo
00000096: 7220 6465 6275 6767 696e 6720 6275 6666  r.debugging.buff
00000112: 6572 2063 6f6e 7465 6e74 7322 2c0a 2020  er.contents",...
00000128: 226d 6169 6e22 3a20 2268 6578 6475 6d70  "main":."hexdump
00000144: 2e6a 7322 2c0a 2020 2273 6372 6970 7473  .js",..."scripts
00000160: 223a 207b 0a20 2020 2022 7465 7374 223a  ":.{....."test":
00000176: 2022 6e6f 6465 2074 6573 742e 6a73 220a  ."node.test.js".
00000192: 2020 7d2c 0a20 2022 7265 706f 7369 746f  ..},..."reposito
00000208: 7279 223a 207b 0a20 2020 2022 7479 7065  ry":.{....."type
00000224: 223a 2022 6769 7422 2c0a 2020 2020 2275  ":."git",....."u
00000240: 726c 223a 2022 6769 742b 6874 7470 733a  rl":."git+https:
00000256: 2f2f 6769 7468 7562 2e63 6f6d 2f6a 6f65  //github.com/joe
00000272: 6c65 6477 6172 6473 2f6e 6f64 652d 6865  ledwards/node-he
00000288: 7864 756d 702e 6769 7422 0a20 207d 2c0a  xdump.git"...},.
00000304: 2020 226b 6579 776f 7264 7322 3a20 5b0a  .."keywords":.[.
00000320: 2020 2020 2268 6578 6475 6d70 220a 2020  ...."hexdump"...
00000336: 5d2c 0a20 2022 6175 7468 6f72 223a 2022  ],..."author":."
00000352: 4a6f 656c 2045 6477 6172 6473 203c 6a6f  Joel.Edwards.<jo
00000368: 656c 6564 7761 7264 7340 676d 6169 6c2e  eledwards@gmail.
00000384: 636f 6d3e 222c 0a20 2022 6c69 6365 6e73  com>",..."licens
00000400: 6522 3a20 2249 5343 222c 0a20 2022 6275  e":."ISC",..."bu
00000416: 6773 223a 207b 0a20 2020 2022 7572 6c22  gs":.{....."url"
00000432: 3a20 2268 7474 7073 3a2f 2f67 6974 6875  :."https://githu
00000448: 622e 636f 6d2f 6a6f 656c 6564 7761 7264  b.com/joeledward
00000464: 732f 6e6f 6465 2d68 6578 6475 6d70 2f69  s/node-hexdump/i
00000480: 7373 7565 7322 0a20 207d 2c0a 2020 2268  ssues"...},..."h
00000496: 6f6d 6570 6167 6522 3a20 2268 7474 7073  omepage":."https
00000512: 3a2f 2f67 6974 6875 622e 636f 6d2f 6a6f  ://github.com/jo
00000528: 656c 6564 7761 7264 732f 6e6f 6465 2d68  eledwards/node-h
00000544: 6578 6475 6d70 2372 6561 646d 6522 0a7d  exdump#readme".}
00000560: 0a                                       .
```

[travis-url]: https://travis-ci.org/joeledwards/node-hexdump
[travis-image]: https://img.shields.io/travis/joeledwards/node-hexdump/master.svg

[npm-url]: http://www.npmjs.com/package/@buzuli/hexdump
[npm-image]: http://img.shields.io/npm/v/@buzuli/hexdump.svg
