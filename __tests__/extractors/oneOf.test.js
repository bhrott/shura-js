const { oneOf } = require('../../extractors')

test('item in list returns true', () => {
    const value = 'abc'
    const template = {
        items: ['xyz', 'abc']
    }

    const result = oneOf.extract(template, value)

    expect(result).toBe(value)
})

test('item not in list returns false', () => {
    const value = 'abc'
    const template = {
        items: ['xyz', 'abcd']
    }

    const result = oneOf.extract(template, value)

    expect(result).toBeUndefined()
})

test('123 with "123" in list returns false', () => {
    const value = 123
    const template = {
        items: ['123', 1234]
    }

    const result = oneOf.extract(template, value)

    expect(result).toBeUndefined()
})
