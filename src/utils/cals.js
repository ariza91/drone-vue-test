export const calculateAverageOf = (array, fields) => {
    const init = {};
    fields.forEach(f => init[f] = 0);

    const sums = array.reduce(
        (acc, curr) => {
            fields.forEach(f => acc[f] += curr[f])
            return acc
        }, init
    );


    return fields.map(f => ({ key: f, value: sums[f] / array.length }))
}