/**
 * @jest-environment jsdom
 */
// Ici j'importe DOM Test Librairy
 import {
    getByTestId
} from '@testing-library/dom'

// jest sait simuler un DOM grâce au commentaire  < @jest-environment jsdom >   
// L’apport principal de testing-library est de faciliter la sélection des
//  nœuds sur le DOM pour réaliser ces tests comme la querie getByTestId($wrapper, "hello").

// Je crée ma suite de test
describe('Sample 1 Integration Test Suites', () => {
    // Je crée mon test
    it('should display "Hello, Thomas"', () => {
        // Je crée un nouveau noeud
        const $wrapper = document.createElement('div')

        // Je lui injecte du HTML
        $wrapper.innerHTML = `
            <div id="root">
                <h1 data-testid="hello">Hello, Thomas</h1>
            </div>
        `

        // Je test le resultat
        expect(getByTestId($wrapper, "hello").textContent).toEqual("Hello, Thomas")
    })
})
