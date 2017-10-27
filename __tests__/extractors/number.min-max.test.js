const { number } = require('../../extractors')

test('123 with "max=100" returns false', () => {
    const value = 123
    const template = {
        max: 100
    }

    const result = number.extract(template, value)

    expect(result).toBeUndefined()
})

test('123 with "min=124" returns false', () => {
    const value = 123
    const template = {
        min: 124
    }

    const result = number.extract(template, value)

    expect(result).toBeUndefined()
})

test('123 with "min=123" returns true', () => {
    const value = 123
    const template = {
        min: 100
    }

    const result = number.extract(template, value)

    expect(result).toBe(value)
})

test('123 with "max=123" returns true', () => {
    const value = 123
    const template = {
        max: 123
    }

    const result = number.extract(template, value)

    expect(result).toBe(123)
})

test('-1 with "min=0" returns false', () => {
    const value = -1
    const template = {
        min: 0
    }

    const result = number.extract(template, value)

    expect(result).toBeUndefined()
})
