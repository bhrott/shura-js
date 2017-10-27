const { boolean } = require('../../validators')

test('boolean validation with true returns true', () => {
    const value = true
    const template = null

    const isValid = boolean.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('boolean validation with false returns true', () => {
    const value = false
    const template = null

    const isValid = boolean.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('boolean validation with abc returns false', () => {
    const value = 'abc'
    const template = null

    const isValid = boolean.isValid(template, value)

    expect(isValid).toBeFalsy()
})
