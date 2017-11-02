const shurajs = require('../index')

test('default string binds to null', () => {
    const expected = null

    const received = shurajs.extract(
        {
            name: {
                '*': 'string',
                minLength: 6,
                defaultValue: null
            }
        },
        {
            name: 'Nubis'
        }
    )

    expect(received.name).toBeNull()
})

test('string without default binds to undefined', () => {
    const expected = null

    const received = shurajs.extract(
        {
            name: {
                '*': 'string',
                minLength: 6
            }
        },
        {
            name: 'Nubis'
        }
    )

    expect(received.name).toBeUndefined()
})
