const Calculator = require('./calculator')
describe('Calculator', () => {
    const calc = new Calculator();
    describe('add', () => {
        test('smoke test', () => {
            expect(calc.add(1,2)).toBe(3);
        })
    })
})