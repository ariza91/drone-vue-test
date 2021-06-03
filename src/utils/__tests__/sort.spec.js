import sort, { ASC, DESC } from '../sort';

const field = 'test';
const mockArray = [{ [field]: 10 }, { [field]: 20 }]

describe('sort', () => {
    describe('byNumber', () => {
        it('ascending', () => {
            expect(mockArray.sort((a, b) => sort.byNumber(a, b, field, ASC)))
                .toEqual(mockArray);
        })
        it('descending', () => {
            expect(mockArray.sort((a, b) => sort.byNumber(a, b, field, DESC)))
                .toEqual(mockArray.reverse());
        })
    })
})