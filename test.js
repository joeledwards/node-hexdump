const hexdump = require('./hexdump')
const assert = require('assert')

const hx = c => n => hexdump(Buffer.from(c.repeat(n)))
const eq = (a, b) => assert.equal(a, b)

eq(hx('a')(1),
  '00000000: 61                                       a')
eq(hx('b')(2),
  '00000000: 6262                                     bb')
eq(hx('c')(3),
  '00000000: 6363 63                                  ccc')
eq(hx('d')(8),
  '00000000: 6464 6464 6464 6464                      dddddddd')
eq(hx('c')(14),
  '00000000: 6363 6363 6363 6363 6363 6363 6363       cccccccccccccc')
eq(hx('b')(15),
  '00000000: 6262 6262 6262 6262 6262 6262 6262 62    bbbbbbbbbbbbbbb')
eq(hx('a')(16),
  '00000000: 6161 6161 6161 6161 6161 6161 6161 6161  aaaaaaaaaaaaaaaa')

eq(hx('d')(23),
  '00000000: 6464 6464 6464 6464 6464 6464 6464 6464  dddddddddddddddd\n' +
  '00000016: 6464 6464 6464 64                        ddddddd')

eq(hexdump(Buffer.from('Hello. My name is DeadBeef.')),
  '00000000: 4865 6c6c 6f2e 204d 7920 6e61 6d65 2069  Hello. My name i\n' +
  '00000016: 7320 4465 6164 4265 6566 2e              s DeadBeef.'
)
