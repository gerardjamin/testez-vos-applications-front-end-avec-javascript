/**
 * @jest-environment jsdom
 */

//j'importe les librairies de jest-dom
import '@testing-library/jest-dom'
//j'importe la querie getByTestId couplée avec la variable data-testid nous permettra
//de recuperer la valeur d'un noeud
import {
    getByTestId
} from '@testing-library/dom'
//j'importe la fonction router pour pouvoir faire le test
import { router } from './index'


describe('Router Integration Test Suites', () => {

    //GIVEN:en tant qu'utilisateur
    //WHEN: je route sur l'URL "/"  cad pas d'URL
    //THEN: la page de connexion s'affiche avec le titre 'Veuillez vous connecter'

    it('should render the sign in page', async () => {
//je cré l'environnement de la page d'accueuil (cf index.html)
        document.body.innerHTML = `
            <div id="root"></div>
        `
//je lance la fonction router sans lui donner une location 
        document.location = null
        //je lance le router
        await router()
//je regarde le resultat du test
        expect(
            getByTestId(document.body, 'sign-in-form-title')
        ).toHaveTextContent('Veuillez vous connecter')
    })


    //GIVEN:en tant qu'utilisateur
    //WHEN: je route sur l'URL "/#/home" 
    //THEN: la page d'accueuil des capteurs s'affiche avec le titre 'Vos capteurs'

    it('should render sensors home page', async () => {
        //je cré l'environnement de la page d'accueuil (cf index.html)
                document.body.innerHTML = `
                    <div id="root"></div>
                `
        //je lance la fonction router avec une location dédiée a cette page
                document.location = '/#/home'
                await router()
        //je regarde le resultat du test
                expect(
                    getByTestId(document.body, 'home-sensors-title')
                ).toHaveTextContent('Vos capteurs')
            })


    //GIVEN:en tant qu'utilisateur
    //WHEN: je route sur l'URL "/#/facade-details" 
    //THEN: la page ducapteur s'affiche avec le titre 'Details du capteur'

    it('should render sensors facade-details', async () => {
        //je cré l'environnement de la page d'accueuil (cf index.html)
                document.body.innerHTML = `
                    <div id="root"></div>
                `
        //je lance la fonction router avec une location dédiée a cette page
                document.location = '/#/facade-details'
                await router()
        //je regarde le resultat du test
                expect(
                    getByTestId(document.body, 'sensor-detail-title')
                ).toHaveTextContent('Détails du capteur')
            })

    //GIVEN:en tant qu'utilisateur
    //WHEN: je route sur l'URL "/#/add-sensor" 
    //THEN: la page d'accueuil des capteurs s'affiche avec le titre 'ajout d'un nouvau capteur'

    it('should render sensors informations', async () => {
        //je cré l'environnement de la page d'accueuil (cf index.html)
                document.body.innerHTML = `
                    <div id="root"></div>
                `
        //je lance la fonction router avec une location dédiée a cette page
                document.location = '/#/add-sensor'
                await router()
        //je regarde le resultat du test
                expect(
                    getByTestId(document.body, 'add-sensor-title')
                ).toHaveTextContent("Ajout d'un nouveau capteur")
            })






















})//describe
