const { getExtractorByType } = require('../../../extractors/utils')

test('get string extractor success', () => {
    const expected = 'string'
    const received = getExtractorByType({ '*': 'string' })

    expect(received['*']).toBe(expected)
})

test('get invalid extractor results undefined', () => {
    const received = getExtractorByType({ '*': 'batman' })
    expect(received).toBeUndefined()
})
