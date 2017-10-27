const { number } = require('../../extractors')

test('123 returns true', () => {
    const value = 123
    const template = {}

    const result = number.extract(template, value)

    expect(result).toBe(123)
})

test('"123" returns false', () => {
    const value = '123'
    const template = {}

    const result = number.extract(template, value)

    expect(result).toBeUndefined()
})
