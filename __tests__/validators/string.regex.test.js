const { string } = require('../../validators')

test('regex with valid e-mail returns true', () => {
    const value = 'ben-hur@email.com'
    const template = {
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    const isValid = string.isValid(template, value)

    expect(isValid).toBeTruthy()
})

test('regex with invalid e-mail returns true', () => {
    const value = 'ben-hur@..email.com'
    const template = {
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    const isValid = string.isValid(template, value)

    expect(isValid).toBeFalsy()
})
