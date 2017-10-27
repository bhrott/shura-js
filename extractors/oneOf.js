const _ = require('lodash')

module.exports = {
    '*': 'oneOf',
    extract: (template, value) => {
        for (let i = 0; i < template.items.length; i++) {
            let item = template.items[i]

            if (item === value) {
                return value
            }
        }
    }
}
