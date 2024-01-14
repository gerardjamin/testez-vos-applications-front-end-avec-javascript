/**
 * jsDOC
 * @returns {string}
 */
//une fonction qui retourne "thomas"
const getName = () => "thomas"
//une constante
const userAge = 31

//name test suite :toBeDefined Unit Test Suites 
describe('toBeDefined Unit Test Suites', () => {
    //test: dois retourner quelque chose
    it('should return something', () => (
        //la fonction retourne une valeur
        expect(getName()).toBeDefined()
    ))

    it('should also return something', () => {
        //la variable dois etre définie
        expect(userAge).toBeDefined()
    })
})
