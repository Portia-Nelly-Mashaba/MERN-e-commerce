import { getAllProductByIdReducer, getAllProductsReducer } from "./reducers/productReducer.js";
// import {composeWithDevTools} from 'redux-devtools-extension'
import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import { addToCart } from "./actions/cartActions.js";
import addToCartReducer from "./reducers/cartReducer.js";
import { loginUserReducer, logoutUserReducer, registerNewUserReducer } from "./reducers/userReducer.js";
import { getOrdersByUserIdReducer, placeOrderReducer } from "./reducers/orderReducer.js";


const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer,
    getAllProductByIdReducer : getAllProductByIdReducer,
    addToCartReducer : addToCartReducer,
    registerNewUserReducer: registerNewUserReducer,
    loginUserReducer : loginUserReducer,
    logoutUserReducer : logoutUserReducer,
    placeOrderReducer :placeOrderReducer,
    getOrdersByUserIdReducer : getOrdersByUserIdReducer,

})

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

const initialState = {
    addToCartReducer: { cartItems: cartItems },
    loginUserReducer: { currentUser: currentUser}
};

// const composeEnhancers = composeWithDevTools({});

// const store = createStore(finalReducer, composeEnhancers(
//     applyMiddleware(thunk))
// )

const store = createStore(finalReducer, initialState, applyMiddleware(thunk))


export default store