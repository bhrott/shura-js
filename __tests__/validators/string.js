const { string } = require('../../validators')

test('"abc" returns true', () => {
    const value = 'abc'
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid === true)
})

test('123 returns false', () => {
    const value = 123
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid === false)
})

test('null returns false', () => {
    const value = null
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid === false)
})

test('undefined returns false', () => {
    const value = undefined
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid === false)
})
