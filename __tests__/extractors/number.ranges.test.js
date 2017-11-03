const shurajs = require('../../index')

test('123 with "allowPositive=false" returns false', () => {
    const schema = {
        number: {
            '*': 'number',
            allowPositive: false
        }
    }

    const model = {
        number: 123
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBeUndefined()
})

test('-123 with "allowNegative=false" returns false', () => {
    const schema = {
        number: {
            '*': 'number',
            allowNegative: false
        }
    }

    const model = {
        number: -123
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBeUndefined()
})

test('0 with "allowPositive=false" returns false', () => {
    const schema = {
        number: {
            '*': 'number',
            allowPositive: false
        }
    }

    const model = {
        number: 0
    }

    const received = shurajs.extract(schema, model)

    expect(received.number).toBeUndefined()
})
