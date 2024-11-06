export const placeOrder = (token, totalPrice, getState) => dispatch=>{
    
    const currentUser = getState().loginReducer.currentUser
    const cartItems = getState().addToCartReducer.cartItems

    dispatch({type: 'PLACE_ORDER_REQUEST'})

    axios.post('http://localhost:5000/placeorder', {token, totalPrice, currentUser, cartItems})
    .then(res=>{
        dispatch({type: 'PLACE_ORDER_SUCCESS'})

    }).catch(err =>{
        dispatch({type: 'PLACE_ORDER_FAILED'})
    })
}