const _ = require('lodash')
const { getExtractorByType, extractorIdentifierKey } = require('./utils')

const extractorKey = 'object'

const extract = (template, value) => {
    const templateKeys = Object.keys(template)

    const result = {}

    for (let i = 0; i < templateKeys.length; i++) {
        const key = templateKeys[i]
        const extractor = getExtractorByType(template[key])

        const valueProp = value[key]
        const valueTemplate = template[key]

        if (!!extractor) {
            let sanitized = undefined

            if (extractor[extractorIdentifierKey.get()] === extractorKey) {
                sanitized = extract(valueTemplate.definition, valueProp)
            } else {
                sanitized = extractor.extract(valueTemplate, valueProp)
            }

            if (sanitized !== undefined) {
                result[key] = sanitized
            }
        }
    }

    return result
}

module.exports = {
    '*': extractorKey,
    extract: (template, value) => {
        return extract(template, value)
    }
}
