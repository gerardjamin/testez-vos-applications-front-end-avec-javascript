/**
 * @description Verify if we are in dev|prod or test env.
 * We use this block of code in order to pass the tests on the CI
 * @returns {boolean}
 */

//la fonction retourne une valeur boolean true
//je suis en environnement de test
export const isInTestEnv = () => typeof process !== 'undefined' && process.env.NODE_ENV === 'test'
