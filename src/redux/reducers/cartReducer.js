const addToCartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            // Find if the item already exists in the cart
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            
            if (existingItem) {
                // Update quantity of the existing item
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item._id === action.payload._id
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            } else {
                // Add new item to the cart
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }
        }

        case 'DELETE_FROM_CART' : return {
            ...state,
        cartItems: state.cartItems.filter(item => {return item._id !== action.payload._id})
        }

        default:
            return state;
    }
};

export default addToCartReducer;
