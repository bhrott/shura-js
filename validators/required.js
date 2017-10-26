module.exports = {
    '*': '__required__',
    isValid: (template, value) => {
        return template.value === true && value !== null && value !== undefined
    }
}
