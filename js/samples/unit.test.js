import {sayHello} from './unit/unit1'

describe('sayHello test unit',()=>{
    it('should be hello world',()=>{
        expect(sayHello()).toBe('Hello, World')
    })

    it('should be hello gerard',()=>{
        expect(sayHello('gerard')).toBe('Hello, gerard')
    })
})