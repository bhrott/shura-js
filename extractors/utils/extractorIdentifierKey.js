let currentIdentifier = '*'

module.exports = {
    get: () => currentIdentifier,
    set: newIdentifier => {
        currentIdentifier = newIdentifier
    }
}
