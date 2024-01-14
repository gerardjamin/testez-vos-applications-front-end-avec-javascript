/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
//cette fonction prends 2 parametres en argument et retourne leur somme
const makeSum = (a, b) => a + b

/**
 * 
 * @param {string} a 
 * @param {number} b 
 * @returns {string}
 */
//cette fonction prends 2 parametres en argument et retourne leur produit
const makeString = (a, b) => a * b

//name test suite: ToBeNan Unit Test Suites
describe("ToBeNan Unit Test Suites", () => {
    it('should return a NaN', () => {
        //makeSum() dois retouner un nombre
        expect(makeSum(2, 2)).not.toBeNaN()
    })

    it('should not return a NaN', () => {
        //makeString() dois retourner autre chose qu'un nombre
        expect(makeString("hi", 3)).toBeNaN()
    })
})