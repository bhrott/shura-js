const shurajs = require('../../index')

test('invalid min length results undefined', () => {
    const expected = undefined

    const template = {
        '*': 'array',
        minLength: 3
    }

    const value = ['Link', 'Zelda']

    const received = shurajs.extract(template, value)

    expect(received).toBe(expected)
})

test('invalid max length results undefined', () => {
    const expected = undefined

    const template = {
        '*': 'array',
        maxLength: 1
    }

    const value = ['Link', 'Zelda']

    const received = shurajs.extract(template, value)

    expect(received).toBe(expected)
})

test('simple array returns success', () => {
    const expected = ['Link', 'Zelda']

    const template = {
        '*': 'array'
    }

    const value = ['Link', 'Zelda']

    const received = shurajs.extract(template, value)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})

test('array with only string type success', () => {
    const expected = ['Link', 'Zelda']

    const template = {
        '*': 'array',
        innerTypes: [{ '*': 'string' }]
    }

    const value = ['Link', 'Zelda']

    const received = shurajs.extract(template, value)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})

test('array with many types but accept only string type return only valid items', () => {
    const expected = ['Link', 'Zelda']

    const template = {
        '*': 'array',
        innerTypes: [{ '*': 'string' }]
    }

    const value = ['Link', 'Zelda', 123]

    const received = shurajs.extract(template, value)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})

test('multiple innerTypes success', () => {
    const expected = ['Samus', true]

    const template = {
        '*': 'array',
        innerTypes: [{ '*': 'string' }, { '*': 'boolean' }]
    }

    const value = ['Samus', 123, { name: 'Bowser' }, true]

    const received = shurajs.extract(template, value)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})

test('custom resolved success', () => {
    const expected = []

    const template = {
        '*': 'array',
        maxLength: 1,
        resolveInvalidAs: []
    }

    const value = ['you', 'shall', 'not', 'pass']

    const received = shurajs.extract(template, value)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})
