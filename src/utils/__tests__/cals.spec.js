import { calculateAverageOf } from '../cals';

const field = 'test';
const field2 = 'test2';
const mockArray = [
    { [field]: 10, [field2]: 20 },
    { [field]: 20, [field2]: 30 },
    { [field]: 30, [field2]: 40 },
]

describe('cals', () => {
    describe('calculateAverageOf', () => {
        it('array=0 then []', () => {
            expect(calculateAverageOf([], [])).toEqual([])
        })
        it('array and no fields then []', () => {
            expect(calculateAverageOf(mockArray, [])).toEqual([])
        })
        it('array and fields then array with each average', () => {
            expect(calculateAverageOf(mockArray, [field])).toEqual([
                { key: field, value: 20 }
            ])
        })
        it('array and fields > 1 then array with each average', () => {
            expect(calculateAverageOf(mockArray, [field, field2])).toEqual([
                { key: field, value: 20 }, { key: field2, value: 30 }
            ])
        })
    })
})