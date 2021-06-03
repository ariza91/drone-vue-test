export const compareAllElementsOf = (element, input) =>
    !input || Object.values(element).some(attr => `${attr}`.toLowerCase().includes(input.toLowerCase()))