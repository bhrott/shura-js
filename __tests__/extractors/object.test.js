const _ = require('lodash')

const shurajs = require('../../index')

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

    const received = shurajs.extract(template, value)

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

    const received = shurajs.extract(template, value)

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

    const received = shurajs.extract(template, value)

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

    const received = shurajs.extract(template, value)

    expect(JSON.stringify(expected)).toBe(JSON.stringify(received))
})

test('null property is not removed', () => {
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

    const received = shurajs.extract(template, value)

    expect(received.name).toBeNull()
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

    const received = shurajs.extract(template, value)

    expect(JSON.stringify(expected)).toBe(JSON.stringify(received))
})

test('invalid element tree parses successfully', () => {
    const expected = {
        name: 'Zyon',
        skills: {
            combat: {
                attack: 5,
                defense: 5
            }
        }
    }

    const schema = {
        name: { '*': 'string' },
        skills: {
            '*': 'object',
            definition: {
                combat: {
                    '*': 'object',
                    definition: {
                        attack: { '*': 'number' },
                        defense: { '*': 'number' }
                    }
                }
            },
            defaultValue: {
                combat: {
                    attack: 5,
                    defense: 5
                }
            }
        }
    }

    const value = {
        name: 'Zyon',
        skills: false
    }

    const received = shurajs.extract(schema, value)

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
})
