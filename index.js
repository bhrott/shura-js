const { object } = require('./extractors')

const value = {
    name: 'Ben-hur Santos Ott',
    foo: true
}

const template = {
    name: {
        '*': 'string',
        minLength: 5,
        maxLength: 100
    }
}

const result = object.extract(template, value)

console.log(result)
