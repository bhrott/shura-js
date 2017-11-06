const shurajs = require('../../index')

test('123 with "max=100" returns false', () => {
    const schema = {
        number: {
            '*': 'number',
            max: 100
        }
    }

    const model = {
        number: 123
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBeUndefined()
})

test('123 with "min=124" returns false', () => {
    const schema = {
        number: {
            '*': 'number',
            min: 124
        }
    }

    const model = {
        number: 123
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBeUndefined()
})

test('123 with "min=123" returns true', () => {
    const expected = 123

    const schema = {
        number: {
            '*': 'number',
            min: 123
        }
    }

    const model = {
        number: 123
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBe(expected)
})

test('123 with "max=123" returns true', () => {
    const expected = 123

    const schema = {
        number: {
            '*': 'number',
            max: 123
        }
    }

    const model = {
        number: 123
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBe(expected)
})

test('-1 with "min=0" returns false', () => {
    const schema = {
        number: {
            '*': 'number',
            min: 0
        }
    }

    const model = {
        number: -1
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBeUndefined()
})
