const shurajs = require('../index')

// in this test, the name must start
// with a letter.
test('middleware replace blank spaces with "_"', () => {
    const expected = 'Dargor_Shadow_Lord_of_the_Black_Mountain'

    const received = shurajs.extract(
        {
            name: {
                '*': 'string',
                middleware: (schema, value) => {
                    return value.replace(new RegExp(' ', 'g'), '_')
                }
            }
        },
        {
            name: 'Dargor Shadow Lord of the Black Mountain'
        }
    )

    expect(received.name).toBe(expected)
})

test('complext object validate multiple properties', () => {
    const received = shurajs.extract(
        {
            '*': 'object',
            definition: {
                start: { '*': 'number' },
                end: { '*': 'number' }
            },
            middleware: (schema, value) => {
                if (value.end < value.start) {
                    return null
                }

                return value
            }
        },
        {
            start: 5,
            end: 4
        }
    )

    expect(received).toBeNull()
})
