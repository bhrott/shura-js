module.exports = {
    '*': 'boolean',
    extract: (template, value) => {
        if (value === true || value === false) {
            return value
        }
    }
}
