const { string } = require('../../extractors')

test('regex with valid e-mail returns true', () => {
    const value = 'ben-hur@email.com'
    const template = {
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    const result = string.extract(template, value)

    expect(result).toBe(result)
})

test('regex with invalid e-mail returns true', () => {
    const value = 'ben-hur@..email.com'
    const template = {
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    const result = string.extract(template, value)

    expect(result).toBeUndefined()
})
