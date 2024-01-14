/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
//la fonction prends 2 arguments et retourne leur somme
const makeSum = (a, b) => a + b


describe('toBe Unit Test Suites', () => {
    it('should return 4', () => {
        //la fonction dois retourner 4
        expect(makeSum(2, 2)).toEqual(4)
    })

    it('should not return 6', () => {
        //la fonction dois retourner 5 et non 4
        expect(makeSum(2, 3)).not.toEqual(4)
    })
})
