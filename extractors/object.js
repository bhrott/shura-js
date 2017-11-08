const _ = require('lodash')
const {
    getExtractorByType,
    extractorIdentifierKey,
    hydrateSchema
} = require('./utils')

const extractorKey = 'object'

const isObjSchema = schema => {
    const idKey = extractorIdentifierKey.get()
    return schema[idKey] === extractorKey
}

const resolveAfterValidation = (schema, value) => {
    let sanitized = schema.afterValidation(schema, value)

    if (sanitized === undefined) {
        return schema.defaultValue
    }

    return sanitized
}

const extract = (schema, value) => {
    let resolvedSchema = schema

    if (isObjSchema(schema)) {
        hydrateSchema(schema)

        if (!_.isObject(schema.definition)) {
            throw new Error('definition_is_not_set_to_object_schema')
        }

        schema.applyGlobalValidations(schema, value)

        if (_.isNil(value)) {
            return resolveAfterValidation(schema, value)
        } else if (!_.isObject(value)) {
            schema.onValidationFailed(schema, value, 'not_a_object')
            return resolveAfterValidation(schema, undefined)
        }

        resolvedSchema = schema.definition
    }

    let result = {}
    let sanitized = undefined

    let schemaKeyList = Object.keys(resolvedSchema)

    for (let i = 0; i < schemaKeyList.length; i++) {
        let schemaKey = schemaKeyList[i]

        let schemaForProp = resolvedSchema[schemaKey]
        let valueForProp = value[schemaKey]

        hydrateSchema(schemaForProp)

        if (isObjSchema(schemaForProp)) {
            sanitized = extract(schemaForProp, valueForProp)
            sanitized = resolveAfterValidation(schemaForProp, sanitized)

            if (sanitized !== undefined) {
                result[schemaKey] = sanitized
            }
            continue
        }

        const extractor = getExtractorByType(schemaForProp)
        schemaForProp.applyGlobalValidations(schemaForProp, valueForProp)

        sanitized =
            valueForProp === null
                ? null
                : extractor.extract(schemaForProp, valueForProp)
        sanitized = resolveAfterValidation(schemaForProp, sanitized)

        if (sanitized !== undefined) {
            result[schemaKey] = sanitized
        }
    }

    return result
}

module.exports = {
    '*': extractorKey,
    extract: (schema, value) => {
        let sanitized = extract(schema, value)
        return sanitized
    }
}
