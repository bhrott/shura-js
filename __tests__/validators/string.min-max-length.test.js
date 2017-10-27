const { string } = require('../../validators')

test('"abc" with "minLength=4" returns false', () => {
    const value = 'abc'
    const template = {
        minLength: 4
    }

    const isValid = string.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('"aa" with "minLength=2" returns true', () => {
    const value = 'aa'
    const template = {
        minLength: 2
    }

    const isValid = string.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('"acb123" with "maxLength=5" returns false', () => {
    const value = 'acb123'
    const template = {
        maxLength: 5
    }

    const isValid = string.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('"xyz" with "maxLength=3" returns true', () => {
    const value = 'xyz'
    const template = {
        maxLength: 3
    }

    const isValid = string.isValid(template, value)

    expect(isValid).toBeTruthy()
})
