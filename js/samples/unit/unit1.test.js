import { sayHello } from './unit1'  //importation de la fonction à tester

describe('Hello test', () => {

    it('should return "Hello, World"', () => {
        //no argument
        expect(sayHello()).toBe("Hello, World")
    })
    it('should be "Hello, Gerard"', () => {
        //argument = Gerard
        expect(sayHello("gerard")).toBe("Hello, Gerard")
    })
})
