export const compareAllElementsOf = (element, input) =>
    Object.values(element).some(attr => `${attr}`.toLowerCase().includes(input.toLowerCase()))