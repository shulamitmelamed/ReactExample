export function addProduct(prod) {
    return { type: 'addProduct', payload: prod };
}
export function removeProduct(prodId)
{
    return {type: 'removeProduct',payload: prodId}
}
