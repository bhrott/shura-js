const customExtractors = {}

module.exports = {
    get: () => {
        return customExtractors
    },
    create: (name, extractor) => {
        customExtractors[name] = {
            '*': name,
            extract: extractor
        }
    }
}
