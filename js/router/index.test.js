/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import {
    getByTestId
}from '@testing-library/jest-dom'
import { router  }  from './index'

//on recré l'environnement de test: voir la page de connexion
describe ('Router integration test suite' ,() => {

 //test 
 it('Should render the sign in page', async () => {
    //creation de l'environnement
    document.body.innerHTML = `<div id="root"></div>`
    await router()
    expect(
        getByTestId(document.body,'sign-in-form-title')
        ).toHaveTextContent('Veuillez vous connecter')
 })//test
}) //describe
