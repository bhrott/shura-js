const { extractorIdentifierKey } = require('../../../extractors/utils')

test('default key is "*"', () => {
    const expected = '*'
    const received = extractorIdentifierKey.get()

    expect(received).toBe(expected)
})

test('change default key to "$"', () => {
    const expected = '$'

    extractorIdentifierKey.set(expected)

    const received = extractorIdentifierKey.get()

    expect(received).toBe(expected)
})
