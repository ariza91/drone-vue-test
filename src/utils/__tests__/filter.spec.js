import { compareAllElementsOf } from '../filter';

const mockObject = { field1: 'test-name', field2: 20, field3: 'TEST' };

describe('filter', () => {
    describe('compareAllElementsOf', () => {
        it('not input then true', () => {
            expect(compareAllElementsOf(mockObject, null)).toBeTruthy();
            expect(compareAllElementsOf(mockObject, '')).toBeTruthy();
        })
        it('with different inputs', () => {
            expect(compareAllElementsOf(mockObject, '20')).toBeTruthy();
            expect(compareAllElementsOf(mockObject, 'test-')).toBeTruthy();
            expect(compareAllElementsOf(mockObject, 'TEST')).toBeTruthy();
        })
        it('with not founds', () => {
            expect(compareAllElementsOf(mockObject, 'no-in-list')).toBeFalsy();
        })
    })
})