import { retrieveSensorsData } from './sensorsApi.js'
import { data } from '../../../data/mock-homepage-data.js'

// Puis, vous créez le bloc de séries de test (ou Test Suite)
describe('retrieveSensorsData unit test suite ', () => {
    it('should return the mocked data', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})