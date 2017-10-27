const { string } = require('./validators')

const value = 'abc'
const template = {
    minLength: 3
}

const isValid = string.isValid(template, value)

console.log(isValid)
