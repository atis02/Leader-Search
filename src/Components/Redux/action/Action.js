//add products to cart 
export const addCart = (product) => {
    return {
        type: 'ADDCART',
        payload: product
    }
}
//delete products from cart
export const delCart = (product) => {
    return {
        type: 'DELETECART',
        payload: product
    }
}
//decrease products from cart
export const decCart = (product) => {
    return {
        type: 'DECREASECART',
        payload: product
    }
} 
