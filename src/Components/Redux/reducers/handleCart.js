const cart = [];


const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADDCART':
            const axistItem = state.find((x) => x.id === product.id);
            if (axistItem) {
                return state.map((x) => x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    }
                ]
            }
            break;
        case 'DELETECART':
            const existItem = state.find((x) => x.id === product.id);
            return state.filter((x) => x.id !== existItem.id);
            break;
        case 'DECREASECART':
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.quantity != 1) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
                );
            }
            break;
        default:
            return state;
            break;
    }
}
export default handleCart;