const { oneOf } = require('../../validators')

test('item in list returns true', () => {
    const value = 'abc'
    const template = {
        items: ['xyz', 'abc']
    }

    const isValid = oneOf.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('item not in list returns false', () => {
    const value = 'abc'
    const template = {
        items: ['xyz', 'abcd']
    }

    const isValid = oneOf.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('123 with "123" in list returns false', () => {
    const value = 123
    const template = {
        items: ['123', 1234]
    }

    const isValid = oneOf.isValid(template, value)

    expect(isValid).toBeFalsy()
})
