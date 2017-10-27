const { number } = require('../../validators')

test('123 with "max=100" returns false', () => {
    const value = 123
    const template = {
        max: 100
    }

    const isValid = number.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('123 with "min=124" returns false', () => {
    const value = 123
    const template = {
        min: 124
    }

    const isValid = number.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('123 with "min=123" returns true', () => {
    const value = 123
    const template = {
        min: 100
    }

    const isValid = number.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('123 with "max=123" returns true', () => {
    const value = 123
    const template = {
        max: 123
    }

    const isValid = number.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('-1 with "min=0" returns false', () => {
    const value = -1
    const template = {
        min: 0
    }

    const isValid = number.isValid(template, value)

    expect(isValid).toBeFalsy()
})
