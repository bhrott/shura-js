const { array } = require('./extractors')

const template = {
    '*': 'array',
    innerTypes: [{ '*': 'string' }]
}

const value = ['Link', 'Zelda']

const received = array.extract(template, value)

console.log(JSON.stringify(received, null, 4))
