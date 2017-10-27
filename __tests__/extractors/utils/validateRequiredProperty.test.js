const { validateRequiredProperty } = require('../../../extractors/utils')

test('required prop returns success', () => {
    const expected = undefined
    const received = validateRequiredProperty(
        {
            '*': 'number',
            required: true
        },
        29,
        'age'
    )

    expect(expected).toBe(received)
})

test('null property with required template results on error', () => {
    const expectedErrorMessage = 'age is required'

    try {
        validateRequiredProperty(
            {
                '*': 'number',
                required: true
            },
            null,
            'age'
        )

        throw 'test_fail'
    } catch (error) {
        const receivedErrorMessage = error.message

        expect(expectedErrorMessage).toBe(receivedErrorMessage)
    }
})

test('null property with not required template result success', () => {
    const expected = undefined
    const received = validateRequiredProperty(
        {
            '*': 'number',
            required: false
        },
        null,
        'age'
    )

    expect(expected).toBe(received)
})
