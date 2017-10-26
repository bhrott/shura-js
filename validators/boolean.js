module.exports = {
    '*': 'boolean',
    isValid: (template, value) => {
        return value === true || value === false
    }
}
