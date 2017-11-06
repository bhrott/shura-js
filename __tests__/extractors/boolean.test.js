const shurajs = require('../../index')

test('boolean validation with true returns true', () => {
    const expected = true

    const schema = {
        enabled: {
            '*': 'boolean'
        }
    }

    const model = {
        enabled: true
    }

    const received = shurajs.extract(schema, model)

    expect(received.enabled).toBe(expected)
})

test('boolean validation with false returns true', () => {
    const expected = false

    const schema = {
        enabled: {
            '*': 'boolean'
        }
    }

    const model = {
        enabled: false
    }

    const received = shurajs.extract(schema, model)

    expect(received.enabled).toBe(expected)
})

test('boolean validation with "abc" returns false', () => {
    const schema = {
        enabled: {
            '*': 'boolean'
        }
    }

    const model = {
        enabled: 'abc'
    }

    const received = shurajs.extract(schema, model)
    expect(received.enabled).toBeUndefined()
})
