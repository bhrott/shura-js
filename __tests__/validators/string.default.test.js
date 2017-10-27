const { string } = require('../../validators')

test('"abc" returns true', () => {
    const value = 'abc'
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('123 returns false', () => {
    const value = 123
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('null returns false', () => {
    const value = null
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('undefined returns false', () => {
    const value = undefined
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('empty returns true', () => {
    const value = ''
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('white spaces returns true', () => {
    const value = '     '
    const template = {}

    const isValid = string.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('empty with "allowEmpty=false" returns false', () => {
    const value = ''
    const template = {
        allowEmpty: false
    }

    const isValid = string.isValid(template, value)

    expect(isValid).toBeFalsy()
})

test('white spaces with "allowEmpty=false" returns false', () => {
    const value = '     '
    const template = {
        allowEmpty: false
    }

    const isValid = string.isValid(template, value)

    expect(isValid).toBeFalsy()
})
