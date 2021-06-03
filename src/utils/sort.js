export const DESC = 'DESC'
export const ASC = 'ASC'

export default {
    byNumber(a, b, field, order) {
        if (order === DESC) return b[field] - a[field];
        return a[field] - b[field];
    }
}
