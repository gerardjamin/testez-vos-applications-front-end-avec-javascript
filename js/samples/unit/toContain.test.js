/**
 * jsDoc
 * @returns {array}
 */
//cette fonction retourne un tableau
const getFriends = () => ["mike", "john", "lucie", "anna"]

//name test suite: toContain Unit Test Suite
describe('toContain Unit Test Suite', () => {
    it('should contain the name "john"', () => {
        //le tableau retourné par la fonction dois contenir john
        expect(getFriends()).toContain('john')
    })
    
    it('should not contain the name "thomas"', () => {
        //le tableau retourné par la fonction ne dois pas contenir thomas
        expect(getFriends()).not.toContain('thomas')
    })
})
