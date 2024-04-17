const addition = require("../calc.js")
describe("Calculator",() => {
    describe("addition function", () => {
        test("20 plus 22 should return 42", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("50 plus 40 should return 90", () => {
            expect(addition(50, 40)).toBe(90);
        });
    })
})