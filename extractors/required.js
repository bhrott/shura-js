const _ = require('lodash')

module.exports = {
    '*': '__required__',
    extract: (template, value) => {
        const isRequired = _.isNil(template.value) ? true : template.value

        if (isRequired) {
            if (_.isNil(value)) {
                return undefined
            }
        }

        return value
    }
}
