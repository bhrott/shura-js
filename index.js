const { object } = require('./extractors')

const value = {
    name: 'Ben-hur',
    skills: {
        nodejs: 5,
        ios: 7,
        php: -1
    }
}

const template = {
    '*': 'object',
    definition: {
        name: {
            '*': 'string'
        },
        skills: {
            '*': 'object',
            definition: {
                nodejs: {
                    '*': 'number'
                },
                ios: {
                    '*': 'number'
                }
            }
        }
    }
}

const received = object.extract(template, value)

console.log(JSON.stringify(received, null, 4))
