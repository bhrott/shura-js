const { string } = require('../../extractors')

test('"abc" with "minLength=4" returns false', () => {
    const value = 'abc'
    const template = {
        minLength: 4
    }

    const result = string.extract(template, value)

    expect(result).toBeUndefined()
})

test('"aa" with "minLength=2" returns true', () => {
    const value = 'aa'
    const template = {
        minLength: 2
    }

    const result = string.extract(template, value)

    expect(result).toBe(result)
})

test('"acb123" with "maxLength=5" returns false', () => {
    const value = 'acb123'
    const template = {
        maxLength: 5
    }

    const result = string.extract(template, value)

    expect(result).toBeUndefined()
})

test('"xyz" with "maxLength=3" returns true', () => {
    const value = 'xyz'
    const template = {
        maxLength: 3
    }

    const result = string.extract(template, value)

    expect(result).toBe(result)
})
