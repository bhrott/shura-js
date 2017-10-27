const { validateRequiredProperty } = require('../../../extractors/utils')

test('required prop returns success', () => {
    const expected = undefined
    const received = validateRequiredProperty(
        'age',
        {
            '*': 'number',
            required: true
        },
        29
    )

    expect(expected).toBe(received)
})

test('null property with required template results on error', () => {
    const expectedErrorMessage = 'age is required'

    try {
        validateRequiredProperty(
            'age',
            {
                '*': 'number',
                required: true
            },
            null
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
        'age',
        {
            '*': 'number',
            required: false
        },
        null
    )

    expect(expected).toBe(received)
})
