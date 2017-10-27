const { number } = require('../../extractors')

test('123 with "allowPositive=false" returns false', () => {
    const value = 123
    const template = {
        allowPositive: false
    }

    const result = number.extract(template, value)

    expect(result).toBeUndefined()
})

test('-123 with "allowNegative=false" returns false', () => {
    const value = -123
    const template = {
        allowNegative: false
    }

    const result = number.extract(template, value)

    expect(result).toBeUndefined()
})

test('0 with "allowPositive=false" returns false', () => {
    const value = 0
    const template = {
        allowPositive: false
    }

    const result = number.extract(template, value)

    expect(result).toBeUndefined()
})
