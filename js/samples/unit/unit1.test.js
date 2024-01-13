import { sayHello } from './unit1'

describe('Hello test', () => {

    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe("Hello, World")
    })
    it('should be "Hello, Gerard"', () => {
        expect(sayHello("Gerard")).toBe("Hello, Gerard")
    })
})
