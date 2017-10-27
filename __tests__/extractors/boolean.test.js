const { boolean } = require('../../extractors')

test('boolean validation with true returns true', () => {
    const value = true
    const template = null

    const result = boolean.extract(template, value)

    expect(result).toBe(true)
})

test('boolean validation with false returns true', () => {
    const value = false
    const template = null

    const result = boolean.extract(template, value)

    expect(result).toBe(false)
})

test('boolean validation with "abc" returns false', () => {
    const value = 'true'
    const template = null

    const result = boolean.extract(template, value)

    expect(result).toBeUndefined()
})
