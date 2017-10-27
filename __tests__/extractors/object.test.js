const { object } = require('../../extractors')

test('object with string prop returns true', () => {
    const value = {
        name: 'Ben-hur Santos Ott'
    }

    const template = {
        name: {
            '*': 'string',
            minLength: 5,
            maxLength: 100
        }
    }

    const result = 
})
