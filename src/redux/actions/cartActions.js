export const addToCart = (product, quantity) => (dispatch, getState) => {
    const cartItem = {
        name: product.name,
        _id: product._id,
        price: product.price,
        countInStock: product.countInStock,
        quantity  // Assign the passed `quantity` parameter
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartItem });

    localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems));
};

