const shurajs = require('../../index')

test('item in list returns true', () => {
    const expected = 'sword'

    const schema = {
        weapon: {
            '*': 'oneOf',
            items: ['sword', 'axe']
        }
    }

    const model = {
        weapon: 'sword'
    }

    const received = shurajs.extract(schema, model)

    expect(received.weapon).toBe(expected)
})

test('item not in list returns false', () => {
    const schema = {
        weapon: {
            '*': 'oneOf',
            items: ['sword', 'axe']
        }
    }

    const model = {
        weapon: 'bow'
    }

    const received = shurajs.extract(schema, model)

    expect(received.weapon).toBeUndefined()
})

test('123 with "123" in list returns false', () => {
    const schema = {
        number: {
            '*': 'oneOf',
            items: ['123', 1234]
        }
    }

    const model = {
        number: 123
    }

    const received = shurajs.extract(schema, model)

    expect(received.weapon).toBeUndefined()
})
