const _ = require('lodash')

const { object } = require('../../extractors')

test('single property parse success', () => {
    const expected = {
        name: 'Ben-hur'
    }

    const value = {
        name: 'Ben-hur'
    }

    const template = {
        '*': 'object',
        definition: {
            name: {
                '*': 'string'
            }
        }
    }

    const received = object.extract(template, value)

    expect(JSON.stringify(expected)).toBe(JSON.stringify(received))
})

test('invalid property not bind', () => {
    const expected = {
        name: 'Ben-hur'
    }

    const value = {
        name: 'Ben-hur',
        age: 29
    }

    const template = {
        '*': 'object',
        definition: {
            name: {
                '*': 'string'
            }
        }
    }

    const received = object.extract(template, value)

    expect(JSON.stringify(expected)).toBe(JSON.stringify(received))
})

test('nested object success', () => {
    const expected = {
        name: 'Ben-hur',
        skills: {
            nodejs: 5,
            ios: 7
        }
    }

    const value = {
        name: 'Ben-hur',
        skills: {
            nodejs: 5,
            ios: 7
        }
    }

    const template = {
        '*': 'object',
        definition: {
            name: {
                '*': 'string'
            },
            skills: {
                '*': 'object',
                definition: {
                    nodejs: {
                        '*': 'number'
                    },
                    ios: {
                        '*': 'number'
                    }
                }
            }
        }
    }

    const received = object.extract(template, value)

    expect(JSON.stringify(expected)).toBe(JSON.stringify(received))
})

test('schema larger than object success', () => {
    const expected = {
        name: 'Ben-hur'
    }

    const value = {
        name: 'Ben-hur'
    }

    const template = {
        '*': 'object',
        definition: {
            name: {
                '*': 'string'
            },
            skills: {
                '*': 'object',
                definition: {
                    nodejs: {
                        '*': 'number'
                    },
                    ios: {
                        '*': 'number'
                    }
                }
            }
        }
    }

    const received = object.extract(template, value)

    expect(JSON.stringify(expected)).toBe(JSON.stringify(received))
})

test('null property is not removed', () => {
    const expected = {
        name: null
    }

    const value = {
        name: null
    }

    const template = {
        '*': 'object',
        definition: {
            name: {
                '*': 'string'
            }
        }
    }

    const received = object.extract(template, value)

    expect(JSON.stringify(expected)).toBe(JSON.stringify(received))
})

test('undefined property is removed', () => {
    const expected = {}

    const value = {
        name: undefined
    }

    const template = {
        '*': 'object',
        definition: {
            name: {
                '*': 'string'
            }
        }
    }

    const received = object.extract(template, value)

    expect(JSON.stringify(expected)).toBe(JSON.stringify(received))
})
