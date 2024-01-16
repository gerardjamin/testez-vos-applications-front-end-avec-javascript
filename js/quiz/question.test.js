/**
 * @jest-environment jsdom
 */

import {
    getByTestId
} from '@testing-library/dom'

import { renderQuestion } from './question'

describe('RenderQuestion Integration Test Suites', () => {
    it('should have the data-testid', () => {
        expect(
            getByTestId(renderQuestion(), 'question-test')
        ).toBeDefined()
    })

    it('should have Hello, Question?', () => {
        expect(
            getByTestId(hello-question, 'question-test')
        ).toBeDefined()
    })
})
