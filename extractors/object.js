const _ = require('lodash')
const {
    getExtractorByType,
    extractorIdentifierKey,
    validateRequiredProperty
} = require('./utils')

const extractorKey = 'object'

const extract = (template, value) => {
    const idKey = extractorIdentifierKey.get()
    let matchedTemplate = template

    if (template[idKey] === extractorKey) {
        matchedTemplate = template.definition
    }

    const templateKeys = Object.keys(matchedTemplate)

    const result = {}

    for (let i = 0; i < templateKeys.length; i++) {
        const key = templateKeys[i]

        const valueProp = value[key]
        const valueTemplate = matchedTemplate[key]
        validateRequiredProperty(valueTemplate, valueProp, key)

        if (valueProp === undefined) {
            continue
        }

        if (valueProp === null) {
            result[key] = null
            continue
        }

        const extractor = getExtractorByType(matchedTemplate[key])

        if (!!extractor) {
            let sanitized = undefined

            if (extractor[idKey] === extractorKey) {
                sanitized = extract(valueTemplate.definition, valueProp)
            } else {
                sanitized = extractor.extract(valueTemplate, valueProp)
            }

            if (sanitized !== undefined) {
                result[key] = sanitized
            } else if (valueTemplate.defaultValue !== undefined) {
                result[key] = valueTemplate.defaultValue
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
