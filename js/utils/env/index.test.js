// Vous importez la fonction à tester
import { isInTestEnv } from './index'

// Puis, vous créez le bloc de séries de test (ou Test Suite)
describe('isInTestEnv Unit Test Suites', () => {

    it('should return "true"', () => {
        expect(isInTestEnv()).toBeTruthy()
    })

    it('should return "false"', () => {
        //objet process
        process.env.NODE_ENV = 'prod'
        expect(isInTestEnv()).not.toBeTruthy()
    })   
})