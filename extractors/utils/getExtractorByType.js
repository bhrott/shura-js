const extractors = require('../index')

module.exports = template => {
    const key = (template || {})['*']
    return template[key] || null
}
