const { boolean } = require('../../validators')

test('boolean validation with true result success', () => {
    const value = true
    const template = null

    const isValid = boolean.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('boolean validation with false result success', () => {
    const value = false
    const template = null

    const isValid = boolean.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('boolean validation with abc result error', () => {
    const value = 'abc'
    const template = null

    const isValid = boolean.isValid(template, value)

    expect(isValid).toBeFalsy()
})
