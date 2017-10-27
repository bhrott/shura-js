const _ = require('lodash')
const { getExtractorByType } = require('./utils')

module.exports = {
    '*': 'array',
    extract: (template, value) => {
        let result = []
        const defaultValue = template.resolveInvalidAs

        if (!_.isArray(value)) {
            return defaultValue
        }

        if (
            _.isNumber(template.minLength) &&
            value.length < template.minLength
        ) {
            return defaultValue
        }

        if (
            _.isNumber(template.maxLength) &&
            value.length > template.maxLength
        ) {
            return defaultValue
        }

        if (_.isArray(template.innerTypes) && template.innerTypes.length > 0) {
            for (let i = 0; i < value.length; i++) {
                const itemInResult = value[i]

                for (let j = 0; j < template.innerTypes.length; j++) {
                    const innerType = template.innerTypes[j]
                    const extractor = getExtractorByType(innerType)

                    if (!!extractor) {
                        const sanitized = extractor.extract(
                            innerType,
                            itemInResult
                        )

                        if (sanitized !== undefined) {
                            result.push(sanitized)
                        }
                    }
                }
            }
        } else {
            result = value
        }

        return result
    }
}
