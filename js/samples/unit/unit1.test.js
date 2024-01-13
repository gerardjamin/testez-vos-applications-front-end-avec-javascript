import { sayHello } from './unit1'

describe('Hello test', () => {
    it(' should return "Hello, World" ', () => {
        //no arg
        expect(sayHello()).toBe("Hello, World")
    })
    
    it(' should be "Hello, Gerard" ', () => {
        //arg = Gerard
        expect(sayHello("Gerard")).toBe("Hello, Gerard")
    })
    it(' should be "Hello, jamin" ', () => {
        //arg = jamin
        expect(sayHello("jamin")).toBe("Hello, jamin")
    })

    it(' should be "Hello, Gerard jamin" ', () => {
        //arg = Gerard jamin
        expect(sayHello("Gerard jamin")).toBe("Hello, Gerard jamin")
    })

})
