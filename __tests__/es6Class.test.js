const shurajs = require('../index')

const zodiacKnightSchema = {
    name: {
        '*': 'string'
    },
    life: {
        '*': 'number',
        allowNegative: false
    }
}

class ZodiacKnight {
    constructor(model) {
        const sanitized = shurajs.extract(zodiacKnightSchema, model)

        this.name = sanitized.name
        this.life = sanitized.life
    }

    isAlive() {
        return this.life > 0
    }
}

test('binding to class success', () => {
    const expected = {
        name: 'Camus',
        life: 50
    }

    const received = new ZodiacKnight({
        name: 'Camus',
        life: 50
    })

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
    expect(typeof received.isAlive).toBe('function')
})
