const lib = require('../index')

test('valid object success', () => {
    const expected = {
        name: 'Ben-hur Santos Ott',
        contacts: {
            email: 'ben-hur@email.com',
            phone: '+55 51 99999-9999'
        }
    }

    const model = {
        name: 'Ben-hur Santos Ott',
        contacts: {
            email: 'ben-hur@email.com',
            phone: '+55 51 99999-9999'
        }
    }

    const schema = {
        name: {
            '*': 'string',
            minLength: 5,
            maxLength: 100
        },
        contacts: {
            '*': 'object',
            definition: {
                email: {
                    '*': 'string',
                    regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                },
                phone: {
                    '*': 'string',
                    required: false
                }
            }
        }
    }

    const received = lib.extract(schema, model)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})

test('valid array success', () => {
    const expected = [{ name: 'Goku' }]

    const model = [{ name: 'Goku' }]

    const schema = {
        '*': 'array'
    }

    const received = lib.extract(schema, model)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})

test('invalid json object results on error', () => {
    try {
        const model = 123

        const schema = {
            '*': 'string'
        }

        const received = lib.extract(schema, model)

        throw 'test_fail'
    } catch (error) {
        expect(error.message).toBe('invalid_json_value')
    }
})
