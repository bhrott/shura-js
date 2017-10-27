const _ = require('lodash')
const { getExtractorByType, extractorIdentifierKey } = require('./utils')

const extractorKey = 'object'

const extract = (template, value) => {
    const templateKeys = Object.keys(template)

    const result = {}

    for (let i = 0; i < templateKeys.length; i++) {
        const key = templateKeys[i]
        const extractor = getExtractorByType(template[key])

        if (!!extractor) {
            if (extractor[extractorIdentifierKey.get()] === extractorKey) {
            } else {
                const valueProp = value[key]
                const sanitized = extractor.extract(template, valueProp)

                if (sanitized !== undefined) {
                    result[key] = sanitized
                }
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
