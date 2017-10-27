const { required } = require('../../validators')

test('value "abc" and "required=true" returns true', () => {
    const value = 'abc'
    const template = { value: true }

    const isValid = required.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('value 0 and "required=true" returns true', () => {
    const value = 0
    const template = { value: true }

    const isValid = required.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('value null and "required=true" returns false', () => {
    const value = null
    const template = { value: true }

    const isValid = required.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('value undefined and "required=true" returns false', () => {
    const value = undefined
    const template = { value: true }

    const isValid = required.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('value null and "required=false" returns true', () => {
    const value = null
    const template = { value: false }

    const isValid = required.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('value undefined and "required=false" returns true', () => {
    const value = undefined
    const template = { value: false }

    const isValid = required.isValid(template, value)

    expect(isValid).toBeTruthy()
})
