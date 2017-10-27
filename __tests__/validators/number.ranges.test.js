const { number } = require('../../validators')

test('123 with "allowPositive=false" returns false', () => {
    const value = 123
    const template = {
        allowPositive: false
    }

    const isValid = number.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('-123 with "allowNegative=false" returns false', () => {
    const value = -123
    const template = {
        allowNegative: false
    }

    const isValid = number.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('0 with "allowPositive=false" returns false', () => {
    const value = 0
    const template = {
        allowPositive: false
    }

    const isValid = number.isValid(template, value)

    expect(isValid).toBeFalsy()
})
