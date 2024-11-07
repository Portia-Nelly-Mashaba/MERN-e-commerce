import axios from "axios";

export const placeOrder = (token, totalPrice) => (dispatch, getState) => {
    const currentUser = getState().loginUserReducer?.currentUser;
    const demoItems = getState().addToCartReducer?.cartItems;

    if (!currentUser) {
        console.error('User is not logged in');
        dispatch({ type: 'PLACE_ORDER_FAILED', error: 'User not logged in' });
        return;
    }

    // Initialize cartItems array
    const cartItems = [];

    for (let i = 0; i < demoItems.length; i++) {
        const item = {
            name: demoItems[i].name,
            quantity: demoItems[i].quantity,
            price: demoItems[i].price,
            _id: demoItems[i]._id
        };
        cartItems.push(item);
    }

    // Now log cartItems after initialization
    console.log('user:', currentUser);

    dispatch({ type: 'PLACE_ORDER_REQUEST' });

    axios.post('http://localhost:5000/placeorder', { token, totalPrice, currentUser, cartItems })
        .then(res => {
            dispatch({ type: 'PLACE_ORDER_SUCCESS' });
            console.log(res);
        })
        .catch(err => {
            dispatch({ type: 'PLACE_ORDER_FAILED' });
            console.error('Order placement error:', err.response?.data || err.message);
        });
};

export const getOrdersByUserId = () =>(dispatch, getItem)=>{

    const userid = getItem().loginUserReducer.currentUser._id

    dispatch({type: 'GET_ORDERSBYUSERID_REQUEST'});

    axios.post('http://localhost:5000/getordersbyuserid', {userid: userid})
    .then(res=>{
        dispatch({type: 'GET_ORDERBYUSERID_SUCCESS', payload:res.data});
        console.log(res.data);
        
    })
    .catch(err=>{
        dispatch({type: 'GET_ORDERSBYUSERID_FAILED', payload:err});

    })

}
