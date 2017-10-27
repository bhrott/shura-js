const shurajs = require('../index')

test('create a age mixin success', () => {
    shurajs.mixin('age', (schema, value) => {
        if (value < 18 || value > 99) {
            return undefined
        }
        return value
    })

    const expected = { age: 42 }

    const model = { age: 42 }
    const schema = {
        age: {
            '*': 'age'
        }
    }

    const received = shurajs.extract(schema, model)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})

test('create a age mixin success', () => {
    shurajs.mixin('age', (schema, value) => {
        if (value < 18 || value > 99) {
            return undefined
        }
        return value
    })

    const expected = {}

    const model = { age: 120 }
    const schema = {
        age: {
            '*': 'age'
        }
    }

    const received = shurajs.extract(schema, model)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})
