import { getAllProductByIdReducer, getAllProductsReducer } from "./reducers/productReducer.js";
// import {composeWithDevTools} from 'redux-devtools-extension'
import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import { addToCart } from "./actions/cartActions.js";
import addToCartReducer from "./reducers/cartReducer.js";
import { registerNewUserReducer } from "./reducers/userReducer.js";


const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer,
    getAllProductByIdReducer : getAllProductByIdReducer,
    addToCartReducer : addToCartReducer,
    registerNewUserReducer: registerNewUserReducer

})

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
    addToCartReducer: { cartItems }
};

// const composeEnhancers = composeWithDevTools({});

// const store = createStore(finalReducer, composeEnhancers(
//     applyMiddleware(thunk))
// )

const store = createStore(finalReducer, initialState, applyMiddleware(thunk))


export default store