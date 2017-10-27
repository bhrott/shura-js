const { object } = require('./extractors')

const model = {
    name: 'Ben-hur Santos Ott',
    contacts: {
        email: 'ben-hur@email.com'
        //phone: '+55 51 99999-9999'
    }
}

const schema = {
    name: {
        '*': 'string',
        minLength: 5,
        maxLength: 100
    },
    contacts: {
        '*': 'object',
        definition: {
            email: {
                '*': 'string',
                regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            phone: {
                '*': 'string',
                required: false
            }
        }
    }
}

const result = object.extract(schema, model)

console.log(result)
