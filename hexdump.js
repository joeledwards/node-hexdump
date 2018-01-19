module.exports = hexdump

function hexdump (buffer) {
  let hex = []
  let ascii = []
  let total = 0
  let offset = 0
  let parts = []

  const extend = () => {
    const prefix = ('0000000' + total).toString(16).slice(-8)
    const diff = 16 - offset
    const pad = ' '.repeat((diff) * 2 + (diff / 2))
    parts.push(`${prefix}: ${hex.join('')} ${pad} ${ascii.join('')}`)

    total += offset
    offset = 0
    hex = []
    ascii = []
  }

  for (b of buffer) {
    if (offset > 0 && offset % 2 == 0) {
      hex.push(' ')
    }
    hex.push(('0' + (b & 0xFF).toString(16)).slice(-2))
    ascii.push(
      (b > 32 && b < 128)
        ? String.fromCharCode(b)
        : '.'
    )

    offset++

    if (offset === 16) {
      extend()
    }
  }

  if (offset > 0) {
    extend()
  }

  return parts.join('\n')
}
