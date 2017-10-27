const { string } = require('../../extractors')

test('"abc" returns true', () => {
    const value = 'abc'
    const template = {}

    const result = string.extract(template, value)

    expect(result).toBe(result)
})

test('123 returns false', () => {
    const value = 123
    const template = {}

    const result = string.extract(template, value)

    expect(result).toBeUndefined()
})

test('null returns false', () => {
    const value = null
    const template = {}

    const result = string.extract(template, value)

    expect(result).toBeUndefined()
})

test('undefined returns false', () => {
    const value = undefined
    const template = {}

    const result = string.extract(template, value)

    expect(result).toBeUndefined()
})

test('empty returns true', () => {
    const value = ''
    const template = {}

    const result = string.extract(template, value)

    expect(result).toBe(result)
})

test('white spaces returns true', () => {
    const value = '     '
    const template = {}

    const result = string.extract(template, value)

    expect(result).toBe(result)
})

test('empty with "allowEmpty=false" returns false', () => {
    const value = ''
    const template = {
        allowEmpty: false
    }

    const result = string.extract(template, value)

    expect(result).toBeUndefined()
})

test('white spaces with "allowEmpty=false" returns false', () => {
    const value = '     '
    const template = {
        allowEmpty: false
    }

    const result = string.extract(template, value)

    expect(result).toBeUndefined()
})
