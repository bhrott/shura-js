const { number } = require('../../validators')

test('123 returns true', () => {
    const value = 123
    const template = {}

    const isValid = number.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('"123" returns false', () => {
    const value = '123'
    const template = {}

    const isValid = number.isValid(template, value)

    expect(isValid).toBeFalsy()
})
