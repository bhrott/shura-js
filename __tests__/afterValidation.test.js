const shurajs = require('../index')

test('invalid string resolved as empty string', () => {
    const expected = ''

    const schema = {
        name: {
            '*': 'string',
            afterValidation: (schema, currentValue) => {
                if (currentValue === undefined) {
                    return ''
                }

                return currentValue
            }
        }
    }

    const model = {
        name: 666
    }

    const received = shurajs.extract(schema, model)

    expect(received.name).toBe(expected)
})

test('invalid object returns default model', () => {
    const expected = {
        life: 100,
        attack: {
            normal: 10,
            special: 15
        }
    }

    const schema = {
        life: { '*': 'number' },
        attack: {
            '*': 'object',
            required: true,
            definition: {
                normal: { '*': 'number' },
                special: { '*': 'number' }
            },
            afterValidation: (schema, currentValue) => {
                if (currentValue === null || currentValue === undefined) {
                    return {
                        normal: 10,
                        special: 15
                    }
                }

                return currentValue
            }
        }
    }

    const model = {
        life: 100
    }

    const received = shurajs.extract(schema, model)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})
