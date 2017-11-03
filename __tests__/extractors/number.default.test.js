const shurajs = require('../../index')

test('123 returns true', () => {
    const expected = 123

    const schema = {
        number: { '*': 'number' }
    }

    const model = {
        number: 123
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBe(expected)
})

test('"123" returns false', () => {
    const schema = {
        number: { '*': 'number' }
    }

    const model = {
        number: '123'
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBeUndefined()
})
