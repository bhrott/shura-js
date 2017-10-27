const { required } = require('../../extractors')

test('value "abc" and "required=true" returns true', () => {
    const value = 'abc'
    const template = { value: true }

    const result = required.extract(template, value)

    expect(result).toBe(value)
})

test('value 0 and "required=true" returns true', () => {
    const value = 0
    const template = { value: true }

    const result = required.extract(template, value)

    expect(result).toBe(value)
})

test('value null and "required=true" returns false', () => {
    const value = null
    const template = { value: true }

    const result = required.extract(template, value)

    expect(result).toBeUndefined()
})

test('value undefined and "required=true" returns false', () => {
    const value = undefined
    const template = { value: true }

    const result = required.extract(template, value)

    expect(result).toBeUndefined()
})

test('value null and "required=false" returns true', () => {
    const value = null
    const template = { value: false }

    const result = required.extract(template, value)

    expect(result).toBe(value)
})

test('value undefined and "required=false" returns true', () => {
    const value = undefined
    const template = { value: false }

    const result = required.extract(template, value)

    expect(result).toBe(value)
})
