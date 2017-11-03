const shurajs = require('../index')

test('invalid string minLength raises error', () => {
    const schema = {
        name: {
            '*': 'string',
            minLength: 4,
            onValidationFailed: (schema, value, errorCode) => {
                throw new Error(errorCode)
            }
        }
    }

    const model = {
        name: 'Ada'
    }

    try {
        shurajs.extract(schema, model)
        throw 'test_failed'
    } catch (error) {
        expect(error.message).toBe('min_length')
    }
})

test('invalid item in oneOf raises error', () => {
    const schema = {
        weapon: {
            '*': 'oneOf',
            items: ['sword', 'axe', 'spear'],
            onValidationFailed: (schema, value, errorCode) => {
                throw new Error(errorCode)
            }
        }
    }

    const model = {
        weapon: 'bow'
    }

    try {
        shurajs.extract(schema, model)
        throw 'test_failed'
    } catch (error) {
        expect(error.message).toBe('invalid_item')
    }
})

test('non valid negative number raises error', () => {
    const schema = {
        age: {
            '*': 'number',
            allowNegative: false,
            onValidationFailed: (schema, value, errorCode) => {
                throw new Error(errorCode)
            }
        }
    }

    const model = {
        age: -1
    }

    try {
        shurajs.extract(schema, model)
        throw 'test_failed'
    } catch (error) {
        expect(error.message).toBe('is_negative')
    }
})

test('invalid boolean raises error', () => {
    const schema = {
        opened: {
            '*': 'boolean',
            onValidationFailed: (schema, value, errorCode) => {
                throw new Error(errorCode)
            }
        }
    }

    const model = {
        opened: 'yes'
    }

    try {
        shurajs.extract(schema, model)
        throw 'test_failed'
    } catch (error) {
        expect(error.message).toBe('not_a_boolean')
    }
})

test('array with invalid inner type raises error', () => {
    const schema = {
        names: {
            '*': 'array',
            innerTypes: [{ '*': 'string' }],
            onValidationFailed: (schema, value, errorCode) => {
                throw new Error(errorCode)
            }
        }
    }

    const model = {
        names: ['Goku', 12]
    }

    try {
        shurajs.extract(schema, model)
        throw 'test_failed'
    } catch (error) {
        expect(error.message).toBe('inner_type_validation_failed')
    }
})
